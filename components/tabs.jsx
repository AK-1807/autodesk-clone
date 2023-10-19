"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState} from 'react'

function Tabs(props) {

    var data = props.data
    const [i, setI] = useState(0)
    const [j, setJ] = useState(0)
    const [name, setName] = useState('Document Management')
    
    const handler = (index,text) => {
        setI(index)
        setName(text)
            
        { j == 0 ? setJ(1) : setJ(0) }
    }

    const listHandler = () => {
     
        (j==0 ? setJ(1) : setJ(0))
    }
    
    const active = {
        borderLeft: " 3px solid #2084fa"
    }

  return (
    <section className='py-20'>
        <div className="container">
            <div className="wrapper flex flex-wrap items-center relative">
                  <div className="left_col w-full lg:w-1/5 pr-2">
                      <div className='tabName sm:hidden p-3 border-l-2 border-purple' onClick={()=>listHandler()}>
                          <h5>{ name}</h5>
                      </div>
                      <ul className={`pb-0 sm:pb:5 border-b-2 w-full ${j==0?'h-0':'h-auto'} sm:h-auto bg-slate-200 sm:bg-white absolute sm:relative overflow-hidden sm:overflow-auto sm:flex lg:block`}>
                          {data.tabs.map((item,indx) => {
                              return (
                                  <li key={indx} className={ ` my-2.5 p-1.5 ${i === indx ? "sm:border-b-2 w-full sm-w-auto lg:border-l-4 lg:border-b-0 lg:border-purple block sm:inline-block " : ""}`} onClick={()=>handler(indx, item.title)} ><h5 className='cursor-pointer'>{ item.title}</h5></li>
                              )
                             
                         })}
                      </ul>
                      <div className="btn_wrap py-5">
                          <Link href="/" className='inline-block font-bold text-black'><Image className='inline-block mr-2' src={`https:${data.cta[0].icon[0].image}`} alt="icon" width={20} height={20} />{data.cta[0].textToHyperlink}</Link>
                      </div>
                </div>
                <div className="right_col w-full lg:w-4/5 px-4 border-l-2">
                      <div className="content_wrapper flex flex-wrap items-center">
                          <div className="col_text w-6/12">
                              <h3>{data.tabs[i].content[0].highlights[0].title }</h3>
                              <p>{data.tabs[i].content[0].highlights[0].description}</p>
                              <div className="btn my-2.5 ">
                               
                                <Link href="/" className='inline-block font-bold text-black'> <Image className='inline-block mr-2' src={`https:${ data.tabs[i].content[0].highlights[0].link[0].icon[0].image}`} alt="icon" width={20} height={20} />{ data.tabs[i].content[0].highlights[0].link[0].textToHyperlink}</Link>
                              </div>
                          </div>
                          <div className="col_img w-6/12 py-3">
                              <Image className='object-contain  w-full h-full' src={`https:${data.tabs[i].content[0].image[0].image}` } alt={data.tabs[i].content[0].image[0].altText} priority width={200} height={100} quality={100} />
                          </div>

                      </div>
                </div>
            </div>  
        </div>
    </section>
  )
}

export default Tabs