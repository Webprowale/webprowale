import React from "react";
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
function ServiceOffer() {
  const con = useRef(null);
  useGSAP(()=>{
    gsap.from(con.current, {
      duration:3.5,
      ease: "bounce.out",
      y: 200
      });
  })
  const services = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description: "Full-stack web applications with React, Next.js, and Node.js"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "API Development",
      description: "RESTful & GraphQL APIs with Laravel, NestJS, and Python"
    },
    {
      icon: "fas fa-brain",
      title: "AI Integration",
      description: "Custom AI solutions with OpenAI, Whisper, and Azure AI"
    },
    {
      icon: "fas fa-database",
      title: "Database Design",
      description: "Scalable database architecture with PostgreSQL and MySQL"
    }
  ];

  return (
    <div className="rounded mt-3 shadow px-4 py-4 d-flex flex-column con1" ref={con}>
      <div className="text-center mb-4">
        <h4 className="fw-bold mb-2" style={{ fontSize: '1.75rem' }}>Core Services</h4>
        <p className="text-muted mb-0 small">Specialized expertise across the full development stack</p>
      </div>
      
      <div className="row g-3">
        {services.map((service, index) => (
          <div key={index} className="col-6">
            <div className="h-100 p-3 rounded border" style={{ background: '#f8f9fa' }}>
              <div className="d-flex align-items-center mb-2">
                <div 
                  className="rounded-circle primaryBg text-white d-flex align-items-center justify-content-center me-2"
                  style={{ width: '40px', height: '40px', minWidth: '40px' }}
                >
                  <i className={service.icon} style={{ fontSize: '1.1rem' }}></i>
                </div>
                <h6 className="fw-bold mb-0" style={{ fontSize: '0.95rem' }}>{service.title}</h6>
              </div>
              <p className="mb-0 small text-muted" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceOffer;
