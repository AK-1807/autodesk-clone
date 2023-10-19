import React from 'react'
import Image from 'next/image'

function LogoFrame(props) {
    var data = props.data
    
    var temp = (data.description).replaceAll("*","")
    var title = temp.replaceAll("#","")
  return (
      <section className='py-20'>
    
          <div className="container">
              <div className="title ">
                  <h2 className='text-center'>{title}</h2>
                  <div className="logo-wrap flex flex-wrap mt-10">
                      {(data.logos).map((item,i) => {
                          return (
                            <div key={i} className="logo_wrap w-full mb-7 sm:mb-7 md:mb-10 lg:mb-0 md:w-1/2 lg:w-1/5 flex justify-center">
                                  <Image src={item.image} alt={ item.altText} quality={50} width={100} height={ 100} />
                            </div>
                          )
                      })}
                      
                  </div>
              </div>
        </div>
      
      </section>
   )
}

export default LogoFrame