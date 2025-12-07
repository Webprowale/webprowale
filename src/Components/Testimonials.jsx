import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Project Manager, Immigify",
      text: "Joshua led our engineering team brilliantly in building Immigify's AI-powered platform. His expertise in Laravel, React, and Python was instrumental in delivering our AI Interview system on time and exceeding expectations.",
      image: "https://ui-avatars.com/api/?name=Sarah+Mitchell&background=8121d0&color=fff&size=128"
    },
    {
      name: "Michael Foster",
      role: "Product Lead, TheJobwise",
      text: "Working with Joshua on our backend was exceptional. His Node.js and NestJS expertise helped us build a scalable job-matching platform that handles thousands of users seamlessly. Highly recommended!",
      image: "https://ui-avatars.com/api/?name=Michael+Foster&background=8121d0&color=fff&size=128"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Afrohealth",
      text: "Joshua's full-stack capabilities transformed our healthcare recruitment portal. The multiple payment gateway system and AI agent he built streamlined our operations significantly. Outstanding technical expertise!",
      image: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=8121d0&color=fff&size=128"
    },
    {
      name: "David Chen",
      role: "CTO, Konvas AI",
      text: "Joshua's backend engineering skills are top-notch. He optimized our APIs to handle 10k+ daily requests and seamlessly integrated our Shopify storefronts. His Laravel expertise was exactly what we needed.",
      image: "https://ui-avatars.com/api/?name=David+Chen&background=8121d0&color=fff&size=128"
    }
  ];

  return (
    <div className="rounded shadow px-4 py-3 mt-3 con1 ">
      <h4 className="fw-bold fs-4 mb-4 primaryColor">What Clients Say</h4>
      <div className="row">
        {testimonials.map((item, i) => (
          <div key={i} className="col-12 mb-3">
            <div className="card shadow-sm border secondaryBg">
              <div className="card-body">
                <div className="mb-3">
                  <i className="fas fa-quote-left primaryColor me-2"></i>
                  <span className="small">{item.text}</span>
                  <i className="fas fa-quote-right primaryColor ms-2"></i>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img 
                    src={item.image} 
                    className="rounded-circle" 
                    width="50" 
                    height="50"
                    alt={item.name}
                  />
                  <div className="ms-3">
                    <h6 className="mb-0 fw-bold">{item.name}</h6>
                    <small className="text-muted">{item.role}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
