"use client"
import React,{useState,useEffect} from 'react'
import { IoMoonOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";

import { useTheme } from 'next-themes'

const ThemeComp = () => {
    const [mounted, setMounted] = useState(false)
    const {systemTheme, theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
      }, [])
    
      const themeMode = theme === "system" ? systemTheme : theme
  return (
    <div>
        {
            mounted && (
                themeMode === "dark" ?
                <IoMoonOutline onClick={() => setTheme('light')} className='cursor-pointer' size={22}/>:
                <CiLight onClick={() => setTheme('dark')} className='cursor-pointer' size={22}/>
            )
        }

    </div>
  )
}

export default ThemeComp