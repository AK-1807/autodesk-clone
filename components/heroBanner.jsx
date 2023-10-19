'use client'
import Link from 'next/link'
import React from 'react'

function heroBanner(props) {
    //https://construction.autodesk.com/static/hero-out-mp4-transparent-8261adc1ca6d46795284eab62a6eae96.mp4
//data.foregroundVideo.filename
    var data = props.data
    var video = <video autoPlay={true } loop muted>
            <source src={data.foregroundVideo.filename} type="video/mp4"/>
        </video>
    return (
        <section className='banner py-12 bg-black'>
            <div className="container">
                <div className="wrapper flex flex-wrap items-center">
                    <div className="col-two w-full md:w-6/12 ">
                        <h6 className='text-mustered '>{data.alertText}</h6>
                        <h1 className='text-white'>{data.title}</h1>
                        <p className='text-white py-4'>{data.description}</p>
                        <div className='btn'>
                            <Link href="/" className='my-2.5 p-3 bg-white inline-block  text-black'>{data.button[0].text}</Link>
                        </div>
                    </div>
                    <div className="col-two w-full md:w-6/12">
                        { video}
                       
                    </div>
                </div>
            </div>
        </section>
        
  )
}

export default heroBanner
