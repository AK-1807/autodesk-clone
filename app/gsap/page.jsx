'use client'
import React ,{useRef,useEffect} from 'react'
import { gsap } from "gsap";

function Page() {

    const boxRef = useRef();

    useEffect(() => {
        gsap.to(boxRef.current, {
          rotation: "+=360"
        });
      },[]);

    const onEnter = ({ currentTarget }) => {
        // gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
        gsap.to(boxRef.current, {
            rotation: "+=360"
          });
      };
      //onMouseLeave={onLeave}
    //   const onLeave = ({ currentTarget }) => {
    //     gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
    //   };

  return (
    <div className="app h-96">
     <h2 ref={boxRef} className="box mx-auto my-auto p-4 bg-orange-500 inline-block " onMouseEnter={onEnter} >Hello</h2>
   </div>
  )
}

export default Page