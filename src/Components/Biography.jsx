import React, { useEffect, useRef } from "react";
import LazyLoad from 'react-lazyload';
import Dev from "../Images/webb2.png";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Biography() {
  const con = useRef(null);
  const image = useRef(null);

  useGSAP(()=>{
    gsap.from(con.current, { x: -300, duration: 2, ease: 'sine.out' });
    
  })
  

  return (
    <div className="rounded shadow px-3 pt-2 d-flex flex-column con1 mb-2" ref={con}>
      <div className="primaryBg rounded mb-1">
        <LazyLoad height={200} offset={100}>
          <img src={Dev} className="img-fluid"  height={100} alt="Developer" />
        </LazyLoad>
      </div>
      <h3 className="primaryColor rounded fs-6 fw-bold mt-2">I'm Joshua Akinwale(Webprowale)</h3>
      <p className="lead small fw-semibold">
        Crafting Tomorrow's Web for a Better Experience
        <br />
        building responsive interfaces, optimizing performance, or enhancing
        accessibility across the globe
      </p>
      <Link to='/resume' className="btn fw-semibold primaryBg text-white mb-3">View Resume</Link>
    </div>
  );
}

export default Biography;
