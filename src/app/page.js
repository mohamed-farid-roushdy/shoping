import Image from 'next/image'
import styles from './page.module.css'
import hero from "../../public/images/hero.svg"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your Best Online Shoop Destination!</h1>
        <p className={styles.description}>lorem16 mohamed farid you can buy any thing from any thing you want coco pops here you can by now</p>
        <button className={styles.btn}>Shop now</button>
      </div>
      <div className={styles.col}>
        <Image
        src={hero}
        className={styles.img}
        alt={"online shoop"}/>
      </div>
    </div>
  )
}
