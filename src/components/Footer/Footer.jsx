import React from 'react'
import styleFooter from "./Footer.module.css"
import Image from 'next/image'
import { socialIcon } from './data'

const Footer = () => {
  return (
    <div className={styleFooter.container} >
      <div>Ⓒ2023 Online Shoop. All right reserved.</div>
      <div className={styleFooter.social}>

        {socialIcon.map(icon =>
          <Image
            key={icon.id}
            src={icon.url}
            width={20}
            height={20}
            className={styleFooter.icon}
            alt={icon.alt} />
        )}

      </div>
    </div>
  )
}

export default Footer