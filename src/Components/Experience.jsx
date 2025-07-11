import React from 'react'
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
function Experience() {
  const con = useRef(null);
  useGSAP(()=>{
    gsap.from(con.current, {
      duration:3.5,
      ease: "bounce.out",
      x: -100
      });
  })
  return (
    <div className="rounded mt-3 shadow px-3 py-4 d-flex flex-column text-center con1" ref={con} >
    <div className="d-flex flex-column ">
    <h3>05</h3>
    <p className='lead fs-4'>YEARS OF SOLID EXPERIENCE</p>
    </div>
    <div className="d-flex flex-column">
    <h3>30+</h3>
    <p className='lead fs-4'> PROJECTS DELIVERED</p>
    </div>
    <div className="d-flex flex-column mb-4">
    <h3>15+</h3>
    <p className='lead fs-4'>GLOBAL CLIENTS IMPACTED</p>
    </div>
    </div>
  )
}

export default Experience
