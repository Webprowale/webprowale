import React from 'react'
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
function Title() {
  const con = useRef(null);
  useGSAP(()=>{
    gsap.from(con.current, {
      duration:3.5,
      ease: "bounce.out",
      y: -100,
      });
  })
 
  return (
    <div className='rounded shadow px-3  pt-4 pb-2 d-flex flex-column con1' ref={con}>
     <h3 className='fs-6 small fw-semibold primaryColor tit'>Title</h3>
     <h2 className='fw-bold fs-6 ms-2 text-black sof'>Software</h2>
     <h2 className='fw-bold fs-4 ms-3 lead dev'>Engineer</h2>
    </div>
  )
}

export default Title
