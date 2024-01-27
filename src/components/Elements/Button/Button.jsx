"use client"
import React from 'react'
import styleButton from "./Button.module.css"

const Button = () => {
  return (
    <button
    onClick={() => { console.log("login") }}
    className={styleButton.btn}
>Login</button>
  )
}

export default Button