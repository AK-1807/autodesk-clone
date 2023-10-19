// 'use client'
import React from 'react'
import dynamic from 'next/dynamic';
import Comp from '../../components/showList'
import HeroBanner from '../../components/heroBanner'
import LogoFrame from '../../components/logoFrame'
import Intro from '../../components/intro'
import ImgWithBtn from '../../components/imgWithBtn'
import Slider from '../../components/testimonialSlider'
import TextWithImage from '../../components/textWithImage'
import Tabs from '../../components/tabs'
import FooterCta from '../../components/footerCta'
// import { Metadata } from 'next';
const DynamicChatWidget = dynamic(() => import('../../components/Chatbot'), {
  ssr: false, // Don't render on the serve
});




async function About() {

  const res = await fetch("https://construction.autodesk.com/page-data/index/page-data.json")
  const todos = await res.json()
  var pageData = JSON.parse(todos.result.data.story.content)

  var bladeList = pageBuilder(pageData.body)
    
  return (
    <div>
      
          {bladeList.map((blade, index) => {
            return  (blade);
          })}
        {/* <DynamicChatWidget/> */}
    </div>
  )
}

export default About

function pageBuilder(data) { 
  
  let blades = [];
  //fc82165f-859c-4064-b5cc-163cbeca4685
  data.map((blade) => {
    if (blade?.component === 'heroFrame') {
			blades.push(<HeroBanner data={blade}  />);
		}else if (blade?.component === 'customerLogosModule') {
			blades.push(<LogoFrame data={blade}  />);
    }else if (blade?.component === 'titleSubtitleDescriptionModule') {
			blades.push(<Intro data={blade}  />);
		}else if (blade?.component === 'lifecycleModule') {
			blades.push(<ImgWithBtn data={blade}  />);
		}else if (blade?.component === 'twoColHighlightsWithImage') {
			blades.push(<TextWithImage data={blade}  />);
		}else if (blade?.component === 'tabsModule') {
			blades.push(<Tabs data={blade}  />);
		}else if (blade?.component === 'ctaBannerModule') {
			blades.push(<FooterCta data={blade}  />);
    }else if (blade?.component === 'quoteCarousel') {
			blades.push(<Slider data={blade}  />);
		}
  })
  return blades;

}

export async function generateMetadata() {

    const res = await fetch("https://construction.autodesk.com/page-data/index/page-data.json")
    const todos = await res.json()
    var mData = JSON.parse(todos.result.data.story.content)

  return {
    title: (mData.metaData?.title),
    description: (mData.metaData?.description),
    openGraph: {
      title:mData.metaData?.og_title,
    images: [mData.metaData?.og_image],
    },
  }


}
