'use client'
import React from 'react'
import {BsFillLightbulbFill} from 'react-icons/bs'
import {BsFillLightbulbOffFill} from 'react-icons/bs'
import { useTheme } from 'next-themes'
function DarkM() {
    const {systemTheme, theme, setTheme } = useTheme()
    const currentheme = theme === "system" ? systemTheme : theme

  return (
    <div>
        {

currentheme === "dark" ? (<BsFillLightbulbFill className='text-xl cursor-pointer' onClick={() => {setTheme("ligth")}}/>) : (<BsFillLightbulbOffFill className='text-xl cursor-pointer' onClick={() => {setTheme("dark")}}/>)
        }
    </div>
  )
}

export default DarkM
