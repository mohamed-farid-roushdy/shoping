 import React from 'react'
import styleProducts from "./products.module.css"
import Link from 'next/link'
import Image from 'next/image'



async function getData() {
  const res = await fetch('https://dummyjson.com/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return  res.json()
}

export const metadata = {
  title: 'Online Shop - products',
  description: 'all products here',
}

const products = async () =>  {

  const data = await getData()
  const items = data.products
  console.log(items)


  return (
    <div className={styleProducts.mainContainer}> 

    {items.map(item =>(

<Link href={`/products/${item.id}`} className={styleProducts.products} key={item.id}>
    <div className={styleProducts.imageContainer}>
      <Image
      className={styleProducts.img}
      src={item.thumbnail}
      width={350}
      height={250}
      alt=''/>
      </div>
      <div className={styleProducts.content}>
        <h1 className={styleProducts.title}>{item.title}</h1>
        <p className={styleProducts.paragraph}>{item.description}</p>
      </div>
    </Link>

    ))}

    </div>
  )
}

export default products