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
    <div className="rounded mt-3 shadow px-4 py-4 d-flex flex-column text-center con1" ref={con} >
      <div className="mb-4">
        <h2 className='fw-bold mb-1 primaryColor' style={{ fontSize: '2.5rem' }}>5+</h2>
        <p className='text-muted mb-0' style={{ fontSize: '0.9rem', fontWeight: '500' }}>Years Building<br/>Production Systems</p>
      </div>
      <div className="mb-4">
        <h2 className='fw-bold mb-1 primaryColor' style={{ fontSize: '2.5rem' }}>30+</h2>
        <p className='text-muted mb-0' style={{ fontSize: '0.9rem', fontWeight: '500' }}>Projects Delivered<br/>& Deployed</p>
      </div>
      <div className="mb-2">
        <h2 className='fw-bold mb-1 primaryColor' style={{ fontSize: '2.5rem' }}>15+</h2>
        <p className='text-muted mb-0' style={{ fontSize: '0.9rem', fontWeight: '500' }}>Global Clients<br/>Served</p>
      </div>
    </div>
  )
}

export default Experience
