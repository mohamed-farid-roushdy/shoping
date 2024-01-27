import React from 'react'
import styleId from "./id.module.css"
import Image from 'next/image'

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return  res.json()
}

// metaData Dynamic
export async function generateMetadata({ params }) {
  const product = await getData(params.id);
  return {
    title: product.title,
    description:product.description
  }
}
 


const id = async ({params}) => {
  const data = await getData(params.id)
  console.log(data.title)

  return (
    <div className={styleId.container}>
      <header className={styleId.header}></header>
      <div className={styleId.info}>
        <h1 className={styleId.title}>{data.title}</h1>
        <p className={styleId.desc}>{`discount: ${data.discountPercentage} %`}</p>
        <p className={styleId.category}>{`category: ${data.category}`}</p>
        <p className={styleId.category}>{`brand: ${data.brand}`}</p>

      </div>
      <div className={styleId.imgContainer}>
        <Image
        className={styleId.img}
        fill={true}
        src={data.thumbnail}
        alt='product image'/>
        <span className={styleId.seller}>{`${data.price} L.E`}</span>
      </div>
      <div className={styleId.content}>
        <div className={styleId.gallary}>
          {data.images.map(img => (
            <Image
            key={data.id}
            src={img}
            width={150}
            height={150}
            alt={data.title}
            />
          ))}

        </div>
      <p className={styleId.paragraph}>{`rating: ${data.rating}`}</p>
      <p className={styleId.paragraph}>{`stock: ${data.stock}`}</p>

        <p className={styleId.paragraph}>{data.description}</p>
      </div>
    </div>
  )
}

export default id