import React from "react";
import { Link } from "react-router-dom";
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
function SocialIcon() {
  const con = useRef(null);
  useGSAP(()=>{
    gsap.from(con.current, {
      duration:3.5,
      ease: "bounce.out",
      y: -100
      });
  })
  return (
    <div
      className="rounded shadow px-1 pt-2 d-flex flex-column con1" ref={con}
    >
        <h3 className='smal small fw-semibold m-3'>Contact Us</h3>
      <div className="d-flex px-2">
        <div className="shadow  socialCon mb-3 ">
         <Link to='mailto:contact@webprowale.com'><i className="fas fa-envelope"></i></Link>
        </div>
        <div className="mx-2 shadow  socialCon">
         <Link to='tel:+2349035874126'> <i className="fas fa-phone"></i> </Link>
        </div>
      </div>
    </div>
  );
}

export default SocialIcon;
