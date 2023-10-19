"use client"
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function testimonialSlider(props) {
    var data = props?.data

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };
    
    //autoPlay infiniteLoop showThumbs={false}

    return (
        <section className='relative pb-20'>
            <div className="container">
                <div className="slider-wrap relative" >
           
                    <Slider  {...settings}>
                        {data.quotes.map((item, i) => {
                            return (
                                <div key={i} className="slider_wrapper  flex flex-wrap items-center ">
                                    <div className="col_left w-full md:w-1/5 mb-5 md:mb-0">
                                        <div className="img_wrap w-full max-w-xs mx-auto lg:max-w-full">
                                            <Image src={`https:${item.authorImage[0].image}`} alt="authoe" width={200} height={100} />
                                        </div>
                                
                                    </div>
                                    <div className="col_right w-full md:w-4/5 pl-15">
                                        <h2>{item.quote}</h2>
                                        <div className="author_detail mt-5 flex flex-wrap justify-between">
                                            <div className="logo_wrap w-1/5">
                                                <Image src={`https:${item.companyLogo[0].image}`} alt="logo" width={150} height={10} />
                                            </div>
                                            <div className="detail w-1/5 max-sml text-right">
                                                <h6 className='font-bold text-right'>{((item.authorName).split(",")[0]).replaceAll('*', '')}</h6>
                                                <p>{(item.authorName).split(",")[1].replaceAll('*', '')}</p>
                                                <p>{(item.authorName).split(",")[2]}</p>
                                            </div>
        
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                    
                </div>
                
            </div>
        </section>
    )
}