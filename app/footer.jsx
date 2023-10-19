// 'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

async function Footer() {
    const res = await fetch("https://construction.autodesk.com/page-data/index/page-data.json")
  const todos = await res.json()
  var footerData = JSON.parse(todos.result.data.bottomNav.content)
  var socialIcons = footerData.socialLinks
    // console.log(footerData)
    
  
    return (
        <footer className='relative py-20 pb-10 bg-black'>
            <div className="container">
                <div className="wrapper flex flex-wrap ">
                    {(footerData.menus).map((item, i) => {
                        return (
                            <div className="footer_list w-1/5 pr-5" key={i}>
                                <h6 className='text-white mb-7 uppercase'>{item.heading[0].textToHyperlink}</h6>
                                <ul>
                                    {item.menu1.map((list, index) => (
                                        <li key={index} className={` text-white mb-3 ${list.icon.length > 0 ? 'flex items-center' : ''}`}>
                                            {list.icon.length > 0 && (
                                                <div className="iconWrap mr-2"><Image
                                                    src={`https:${list.icon[0].image}`}
                                                    height={18}
                                                    width={18}
                                                    alt="image"
                                                />
                                                </div>
                                            )}
                                            <Link
                                                className=" text-white"
                                                href={`https://construction.autodesk.com/${list.link.cached_url}`}
                                                target="_blank">
                                                {list.textToHyperlink}
                                            </Link>

                                        </li>
                                    ))}
                                
                                </ul>
                            </div>
                        )
                    })}
                   
                </div>
                <div className="policy_and_social_links mt-16">
                    <div className="wrapper flex flex-wrap items-center">
                        <div className="col_policy w-3/5">
                            <span className='inline-block text-dull-white  text-s'>Privacy Settings | Privacy/Cookies | Autodesk Privacy | Legal | Report Noncompliance</span>
                            <span className='inline-block text-dull-white  text-s'>| Do Not Sell My Personal Data | © 2023 Autodesk, Inc. All rights reserved</span>
                        </div>
                        <div className="col_icons flex flex-wrap">
                            {socialIcons.map((icon, i) => {
                                return (
                                    <div className="icon_wrap w-5 mr-5 items-center relative" key={i}>
                                        <Link className="empty_Link" href="/about"></Link>
                                        <Image src={`https:${icon.contentToHyperlink[0].image}`} alt='icons' width={20} height={20} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer