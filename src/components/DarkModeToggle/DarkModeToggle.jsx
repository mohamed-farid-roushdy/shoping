"use client"
import React, { useContext } from 'react'
import styleDarkModeToggle from "./DarkModeToggle.module.css"
import { ThemeContext } from '@/context/ThemeContext'

export const DarkModeToggle = () => {
    const {mode,toggle}= useContext(ThemeContext)
    // const mode = "dark";

  return (
    <div className={styleDarkModeToggle.container} onClick={toggle}>
        <div className={styleDarkModeToggle.icon}>🌙</div>
        <div className={styleDarkModeToggle.icon}>🌚</div>
        <div className={styleDarkModeToggle.switch}
        style={mode==="light"?{left:"2px"}:{right:"2px"}}
        />
    </div>
  )
}
