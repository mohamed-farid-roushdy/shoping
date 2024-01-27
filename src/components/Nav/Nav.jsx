import React from 'react'
import styleNav from "./nav.module.css"
import Link from 'next/link'
import { linksAncor } from './data'
import { Button,DarkModeToggle,Logo } from '@/components/index'




const Nav = () => {
    return (
        <div className={styleNav.container}>
            <Logo/>
            <div className={styleNav.links}>
                <DarkModeToggle/>
                {linksAncor.map(ancor =>
                    <Link key={ancor.id} className={styleNav.link} href={ancor.url}>{ancor.title}</Link>
                )}
                <Button/>
            </div>
        </div>
    )
}

export default Nav