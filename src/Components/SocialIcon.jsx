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
        <h3 className='smal small fw-semibold my-1'>Connect Me</h3>
      <div className="d-flex px-2">
        <div className="shadow  socialCon mb-3 ">
         <Link target='_blank' to='https://github.com/Webprowale'><i className="fab fa-github"></i></Link>
        </div>
        <div className="mx-2 shadow  socialCon">
         <Link target='_blank' to='https://www.linkedin.com/in/webprowale-akinwale'> <i className="fab fa-linkedin-in"></i> </Link>
        </div>
      </div>
    </div>
  );
}

export default SocialIcon;
