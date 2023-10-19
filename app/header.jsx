// 'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HaederNavBuilder, LanguageList } from '../components/haederNavBuilder';
// import {abc} from '../store'
// import { proxy } from "valtio";
// import { useRef,useEffect} from 'react';

// const State = proxy({
//     language: 'en',
//     intro: true,
//     color: '#efbd48',
//     isLogoTexture: true,
//     isFullTexture: false,
// });


async function Header({ params }) {
  console.log(params)

  
  //${State.language == 'en' ? 'com':State.language}
  
  const res = await fetch(`https://construction.autodesk.com/page-data/index/page-data.json`)
  const todos = await res.json()
  var headerData = JSON.parse(todos.result.data.topNav.content)
  const languages = todos.result.pageContext.tagAlternates
  // var socialIcons = headerData

  

  return (
    <header className='  bg-black '>
      
        <div className="up_wrap  border-b border-white">
          <div className="container">
          <div className='py-4 flex flex-wrap items-center justify-between'>
            <div className="site_logo relative">
              <Link className='empty_Link' href="/">.</Link>
              <Image className='w-full h-full' src={`https:${headerData.logoImage}`} width={500} height={500} alt='logo'/>
          </div>
            <div className="contact_wrap text-white ">
                  <LanguageList list={languages } />
            <span className='inline-block px-5  border-r border-white'><Link href={`tel:${headerData.phoneNumber}`}>{headerData.phoneNumber}</Link></span>
            <span className='inline-block px-5'><Link className='text-white' href='/'>{ headerData.login[0].mainButton[0].textToHyperlink}</Link></span>
              <Link href="/" className="my-2.5 py-1 px-3 border-2 border-white  bg-white text-black rounded-lg inline-block">{ headerData.button[0].text}</Link>
          </div>
        </div>
          </div>
        </div>
      <div className="container">
        <ul className='w-full flex text-white py-5 relative'>
          <HaederNavBuilder data={ headerData} />
        </ul>
      </div>
    </header>
  )
}


export default Header
