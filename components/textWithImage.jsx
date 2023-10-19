import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function TextWithImage(props) {
    var data = props.data
    
  return (
      <section className='text_with_image py-10 '>
          <div className="container">
              <div className={data.imageOnRight == true ?("wrapper flex  flex-wrap items-center"):("wrapper flex flex-wrap items-center flex-row-reverse")}>
                  <div className="col_two w-full md:w-6/12">
                      <Image src={`http:${data.image[0].image}`} width={500} height={100} quality={100} alt={data.image[0].altText } />
                  </div>
                  <div className="col_two w-full md:w-6/12 px-3">
                      <h3>{data.highlights[0].title}</h3>
                      <p>{data.highlights[0].description}</p>
                      <div className="btn  mt-5 text-left">
                          <Link href="/" className='my-2.5 p-3 bg-black text-white inline-block'>{data.highlights[0].link[0].text}</Link>
                      </div>
                  </div>
              </div>
          </div>
      
    </section>
  )
}

export default TextWithImage