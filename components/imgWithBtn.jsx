import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ImgWithBtn(props) {
    var data =props.data
  return (
    <section className='py-20'>
        <div className="container">
              <div className="image_wrap">
                  <Image className='w-full h-full object-contain' src={`https:${data.image[0].image}`} alt={data.image[0].altText} width={500} height={500}  quality={100} loading='lazy'/>
              </div>    
              <div className="btn mt-5 text-center">
                  <Link href="/" className='my-2.5 p-3 bg-black text-white inline-block'>{data.cta[0].text}</Link>
              </div>
       </div>
    </section>
  )
}

export default ImgWithBtn