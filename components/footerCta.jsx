import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function FooterCta(props) {
    var data = props.data
    var headline = data.headline.replaceAll("#","")
  return (
      <section className='relative footer_cta flex  items-center'>
          <div className="cta_bg absolute w-full h-full top-0 left-0 -z-10">
                  <Image className='w-full object-cover h-full' src={`http:${data.bgImage[0].image}`} alt='footercta' width={500} height={500} quality={75}/>
              </div>
        <div className="container">
              
              <div className="content z-10 mt-20 pl-20">
                  <h2 className='text-white mb-5'>{ headline}</h2>
                  <div className="btn">
                      <Link href="/" className='my-2.5 p-3 border-2 border-white  bg-white text-black rounded-lg inline-block'>{ data.button[0].text}</Link>
                      <Link href="/" className='my-2.5 p-3 ml-4 bg-transparent border-2 border-white rounded-lg text-white inline-block'>{ data.button[1].text}</Link> 
                  </div>
              </div>

        </div>
    </section>
  )
}

export default FooterCta