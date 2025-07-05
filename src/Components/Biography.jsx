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
        Building Scalable Web Experiences That Power Innovation
        <br />
        As a seasoned Full-Stack Software Engineer, I specialize in delivering robust, scalable, and high-performance digital solutions using modern JavaScript frameworks and battle-tested PHP technologies.
        <br />
        Whether it's building interactive React/Next.js interfaces, designing powerful NestJS backends, or developing RESTful and GraphQL APIs with Laravel or CodeIgniter, I bring five years of hands-on experience to every project, crafting systems that perform reliably at scale.
      </p>
      <Link to='/resume' className="btn fw-semibold primaryBg text-white mb-3">View Resume</Link>
    </div>
  );
}

export default Biography;
