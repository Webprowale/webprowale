import React from "react";
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function WorkWith() {
  const handlemail = () => {
    window.location.href = 'mailto:webprowale@gmail.com';
  }
  
  const handlephone = () => {
    window.location.href = 'tel:+2349035874126';
  }
  
  const handleChat = () => {
    window.open('https://wa.me/2349035874126', '_blank');
  };
  
  const con = useRef(null);
  
  useGSAP(() => {
    gsap.from(con.current, {
      duration: 3.5,
      ease: "bounce.out",
      y: 200
    });
  })
  
  return (
    <div className="rounded mt-3 shadow px-4 py-4 d-flex flex-column con1" ref={con}>
      {/* Header Section */}
      <div className="text-center mb-4">
        <h4 className="fw-bold mb-2" style={{ fontSize: '1.75rem' }}>Let's Work Together</h4>
        <p className="text-muted mb-0 small">Ready to bring your ideas to life</p>
      </div>

      {/* Contact Information */}
      <div className="d-flex flex-column gap-3 mb-4">
        {/* Email */}
        <div 
          className="d-flex align-items-center p-3 rounded border hover-lift"
          onClick={handlemail}
          role="button"
          style={{ 
            cursor: 'pointer', 
            transition: 'all 0.3s ease',
            background: '#f8f9fa'
          }}
        >
          <div 
            className="rounded-circle primaryBg text-white d-flex align-items-center justify-content-center me-3"
            style={{ width: '45px', height: '45px', minWidth: '45px' }}
          >
            <i className="fas fa-envelope" style={{ fontSize: '1.1rem' }}></i>
          </div>
          <div className="flex-grow-1">
            <p className="mb-0 small text-muted" style={{ fontSize: '0.8rem' }}>Email</p>
            <p className="mb-0 fw-semibold" style={{ fontSize: '0.9rem', wordBreak: 'break-all' }}>
              webprowale@gmail.com
            </p>
          </div>
          <i className="fas fa-arrow-right text-muted"></i>
        </div>

        {/* Phone */}
        <div 
          className="d-flex align-items-center p-3 rounded border hover-lift"
          onClick={handlephone}
          role="button"
          style={{ 
            cursor: 'pointer', 
            transition: 'all 0.3s ease',
            background: '#f8f9fa'
          }}
        >
          <div 
            className="rounded-circle primaryBg text-white d-flex align-items-center justify-content-center me-3"
            style={{ width: '45px', height: '45px', minWidth: '45px' }}
          >
            <i className="fas fa-phone" style={{ fontSize: '1.1rem' }}></i>
          </div>
          <div className="flex-grow-1">
            <p className="mb-0 small text-muted" style={{ fontSize: '0.8rem' }}>Phone</p>
            <p className="mb-0 fw-semibold" style={{ fontSize: '0.9rem' }}>
              +234 903 587 4126
            </p>
          </div>
          <i className="fas fa-arrow-right text-muted"></i>
        </div>
      </div>

      {/* CTA Button */}
      <button 
        className="btn btn1 primaryBg fw-bold text-white w-100 py-3"
        onClick={handleChat}
        style={{ 
          borderRadius: '10px',
          fontSize: '1rem',
          transition: 'all 0.3s ease'
        }}
      >
        <i className="fab fa-whatsapp me-2" style={{ fontSize: '1.2rem' }}></i>
        Let's Chat on WhatsApp
      </button>
    </div>
  );
}

export default WorkWith;
