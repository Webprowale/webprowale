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
      <h3 className="primaryColor rounded fs-5 fw-bold mt-2 mb-3">Joshua Akinwale</h3>
      <div className="mb-2">
        <span className="badge bg-dark me-2 mb-2">Full Stack Engineer</span>
        <span className="badge bg-primary me-2 mb-2">Lead Developer</span>
        <span className="badge bg-success mb-2">AI Integration Specialist</span>
      </div>
      <p className="mb-3" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
        Lead engineer with <strong>5+ years</strong> building enterprise-grade applications for startups scaling to thousands of users. 
        Specialized in architecting <strong>AI-powered platforms</strong>, designing <strong>scalable backend systems</strong>, 
        and delivering high-performance web experiences.
      </p>
      <div className="mb-3">
        <div className="d-flex align-items-center mb-2">
          <i className="fas fa-check-circle text-success me-2"></i>
          <span className="small">Led teams building AI recruitment & immigration platforms</span>
        </div>
        <div className="d-flex align-items-center mb-2">
          <i className="fas fa-check-circle text-success me-2"></i>
          <span className="small">Architected systems processing 10k+ daily API requests</span>
        </div>
        <div className="d-flex align-items-center mb-2">
          <i className="fas fa-check-circle text-success me-2"></i>
          <span className="small">Expert in React, Next.js, Node.js, NestJS, Laravel & Python</span>
        </div>
      </div>
      <div className="d-flex gap-2 mb-3">
        <Link to='/resume' className="btn fw-semibold primaryBg text-white flex-grow-1">
          <i className="fas fa-file-alt me-2"></i>View Resume
        </Link>
      
      </div>
    </div>
  );
}

export default Biography;
