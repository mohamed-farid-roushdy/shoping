import React from 'react'
import Link from 'next/link'
import styleLogo from "./logo.module.css"
import { Montserrat } from 'next/font/google'

const logoFont = Montserrat({ subsets: ['latin'],weight:["700"] });

const Logo = () => {
  return (
    <Link href="/" className={`${styleLogo.logo} ${logoFont.className}`}>Online Shop</Link>
  )
}

export default Logo