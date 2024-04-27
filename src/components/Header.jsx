"use client"
import React, {useState} from 'react'
import { CiSearch } from "react-icons/ci";
import MenuItem from './MenuItem';
import ThemeComp from './ThemeComp';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


function Header() {
    const [keyword, setKeyword] = useState();
    const router = useRouter();
    const menu = [
        {
            name:"About",
            url: "/about"
        },
        {
            name:"Sign In",
            url: "/login"

        }
    ]
    const searchFunc = (e) => {
        if(e.key === "Enter" && keyword.length >= 3){
            router.push(`/search/${keyword}`)
            setKeyword('');


        }
    }
  return (
    <div className='flex items-center gap-5  p-12 h-20'>
       <Link href="/">
        <div className='bg-amber-600 rounded-lg p-3 text-2xl font-bold'>MovieApp</div>
       </Link>
        <div className='flex flex-1 items-center gap-4 border p-3 rounded-lg'>
            <input value={keyword}  onKeyDown={searchFunc} onChange={e => setKeyword(e.target.value)} placeholder='Arama Yapınız!' type="text" className='outline-none flex-1 bg-transparent' />
            <CiSearch  size={22}/>
        </div>
        <ThemeComp/>
        {
         menu.map((mn,i) => (
            <MenuItem mn={mn} key={i}/>
         ))
        }
    </div>
  )
}

export default Header