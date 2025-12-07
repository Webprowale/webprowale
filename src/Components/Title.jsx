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
    <div className='rounded shadow px-3 pt-3 pb-3 d-flex flex-column con1' ref={con}>
     <div>
       <p className='text-muted mb-1 small' style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>ROLE</p>
       <h2 className='fw-bold mb-0' style={{ fontSize: '1.3rem', lineHeight: '1.4' }}>
         Full Stack<br/>
         <span className='primaryColor'>Software Engineer</span>
       </h2>
     </div>
    </div>
  )
}

export default Title
