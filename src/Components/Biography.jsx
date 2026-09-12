import React, { useEffect, useRef } from "react";
import LazyLoad from 'react-lazyload';
import Dev from "../Images/webb2.png";
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
      <h3 className="primaryColor rounded fs-5 fw-bold mt-2 mb-3">Webprowale</h3>
      <div className="mb-2">
        <span className="badge bg-dark me-2 mb-2">AI Engineering Company</span>
        <span className="badge bg-primary me-2 mb-2">AI Agents & Automation</span>
        <span className="badge bg-success mb-2">Custom AI Software</span>
      </div>
      <p className="mb-3" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
        Webprowale is an <strong>AI engineering company</strong> that helps businesses build, deploy, and
        automate intelligent AI systems. We build <strong>AI agents</strong>, <strong>business automation</strong>,
        RAG and knowledge systems, voice AI, and custom AI software that connect to existing tools and workflows.
      </p>
      <div className="mb-3">
        <div className="d-flex align-items-center mb-2">
          <i className="fas fa-check-circle text-success me-2"></i>
          <span className="small">AI agents, RAG systems & business automation</span>
        </div>
        <div className="d-flex align-items-center mb-2">
          <i className="fas fa-check-circle text-success me-2"></i>
          <span className="small">Custom software, SaaS platforms, APIs & backends</span>
        </div>
        <div className="d-flex align-items-center mb-2">
          <i className="fas fa-check-circle text-success me-2"></i>
          <span className="small">AI integrations built around your business systems</span>
        </div>
      </div>
    </div>
  );
}

export default Biography;
