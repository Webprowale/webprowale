import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function SeeLatestWork() {
  const con = useRef(null);
  const [showAll, setShowAll] = React.useState(false);

  useGSAP(() => {
    gsap.from(con.current, {
      duration: 3.5,
      ease: "bounce.out",
      y: 200,
    });
  });

  return (
    <div
      className="rounded shadow px-4 pt-4 pb-3 d-flex flex-column mt-2 con1"
      ref={con}
    >
      <div className="text-center mb-4">
        <h2 className="fw-bold mb-2" style={{ fontSize: '2rem' }}>Featured Projects</h2>
        <p className="text-muted mb-0">Building scalable solutions for growing businesses</p>
      </div>

      <div className="d-flex flex-column">
        {/* HostNowNow */}
        <div className="rounded shadow-sm border p-3 mb-3 hover-lift" style={{ transition: 'all 0.3s ease' }}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>HostNowNow</h5>
              <p className="text-muted small mb-0">Frontend Developer</p>
            </div>
            <div className="d-flex gap-2">
              <Link to="/case-study/hostnownow" className="btn btn-sm primaryBg text-white">
                <i className="fas fa-file-alt me-1"></i> Case Study
              </Link>
              <Link target="_blank" to="https://www.hostnownow.com/" className="btn btn-sm btn-outline-secondary">
                <i className="fas fa-external-link-alt"></i>
              </Link>
            </div>
          </div>
          <p className="mb-3" style={{ lineHeight: '1.6' }}>
            Modernized hosting platform frontend with responsive UI, enhanced navigation, and performance optimization for seamless cross-device experience.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-primary">UI/UX</span>
            <span className="badge bg-success">Responsive Design</span>
            <span className="badge bg-secondary">Performance</span>
          </div>
        </div>

        {/* Immigify */}
        <div className="rounded shadow-sm border p-3 mb-3 hover-lift" style={{ transition: 'all 0.3s ease' }}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>Immigify</h5>
              <p className="text-muted small mb-0">Lead Engineer</p>
            </div>
            <div className="d-flex gap-2">
              <Link to="/case-study/immigify" className="btn btn-sm primaryBg text-white">
                <i className="fas fa-file-alt me-1"></i> Case Study
              </Link>
              <Link target="_blank" to="https://immigify.com/" className="btn btn-sm btn-outline-secondary">
                <i className="fas fa-external-link-alt"></i>
              </Link>
            </div>
          </div>
          <p className="mb-3" style={{ lineHeight: '1.6' }}>
            Led engineering team building AI-powered immigration platform. Architected AI Interview system with Laravel, ReactJS, and Python on Azure. Managed dual-database infrastructure (MySQL + PostgreSQL vector store), CI/CD pipelines, and team mentorship.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-dark">Laravel</span>
            <span className="badge bg-primary">ReactJS</span>
            <span className="badge bg-warning text-dark">Python AI/ML</span>
            <span className="badge bg-info text-dark">Azure AI</span>
            <span className="badge bg-secondary">PostgreSQL</span>
            <span className="badge bg-danger">CI/CD</span>
          </div>
        </div>

        {/* TheJobwise */}
        <div className="rounded shadow-sm border p-3 mb-3 hover-lift" style={{ transition: 'all 0.3s ease' }}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>TheJobwise</h5>
              <p className="text-muted small mb-0">Backend Engineer</p>
            </div>
            <div className="d-flex gap-2">
              <Link to="/case-study/thejobwise" className="btn btn-sm primaryBg text-white">
                <i className="fas fa-file-alt me-1"></i> Case Study
              </Link>
              <Link target="_blank" to="https://thejobwise.com/" className="btn btn-sm btn-outline-secondary">
                <i className="fas fa-external-link-alt"></i>
              </Link>
            </div>
          </div>
          <p className="mb-3" style={{ lineHeight: '1.6' }}>
            Engineered scalable backend for AI-powered job matching platform. Built RESTful APIs with Node.js, NestJS, and PostgreSQL for application flows and AI-driven resume processing.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-dark">Node.js</span>
            <span className="badge bg-primary">NestJS</span>
            <span className="badge bg-info text-dark">PostgreSQL</span>
            <span className="badge bg-warning text-dark">REST API</span>
          </div>
        </div>

        {/* Afrohealth */}
        <div className="rounded shadow-sm border p-3 mb-3 hover-lift" style={{ transition: 'all 0.3s ease' }}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>Afrohealth</h5>
              <p className="text-muted small mb-0">Senior Full Stack Developer</p>
            </div>
            <div className="d-flex gap-2">
              <Link to="/case-study/afrohealth" className="btn btn-sm primaryBg text-white">
                <i className="fas fa-file-alt me-1"></i> Case Study
              </Link>
              <Link target="_blank" to="https://afrohealth.care/" className="btn btn-sm btn-outline-secondary">
                <i className="fas fa-external-link-alt"></i>
              </Link>
            </div>
          </div>
          <p className="mb-3" style={{ lineHeight: '1.6' }}>
            Built healthcare recruitment platform with multi-gateway payment system (Strategy Pattern) supporting Paystack, Stripe, and Flutterwave. Developed AI agent with Node.js for automated candidate support and real-time queries.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-primary">Laravel</span>
            <span className="badge bg-info text-dark">MySQL</span>
            <span className="badge bg-warning text-dark">Payment Integration</span>
            <span className="badge bg-secondary">Node.js</span>
            <span className="badge bg-danger">AI Agent</span>
          </div>
        </div>

        {/* Show remaining projects when expanded */}
        {showAll && (
          <>
        {/* Konvas AI */}
        <div className="rounded shadow-sm border p-3 mb-3 hover-lift" style={{ transition: 'all 0.3s ease' }}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>Konvas AI</h5>
              <p className="text-muted small mb-0">Backend Engineer</p>
            </div>
            <Link target="_blank" to="https://konvas.ai/" className="btn btn-sm btn-outline-secondary">
              <i className="fas fa-external-link-alt"></i>
            </Link>
          </div>
          <p className="mb-3" style={{ lineHeight: '1.6' }}>
            Built and maintained REST APIs processing 10k+ daily requests. Optimized MySQL queries and integrated Shopify via GraphQL for personalization.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-dark">Laravel</span>
            <span className="badge bg-primary">CodeIgniter</span>
            <span className="badge bg-success">MySQL</span>
            <span className="badge bg-info text-dark">GraphQL</span>
          </div>
        </div>

        {/* FortuneTimer */}
        <div className="rounded shadow-sm border p-3 mb-3 hover-lift" style={{ transition: 'all 0.3s ease' }}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>FortuneTimer</h5>
              <p className="text-muted small mb-0">Full Stack Developer</p>
            </div>
            <div className="d-flex gap-2">
              <Link to="/case-study/fortunetimer" className="btn btn-sm primaryBg text-white">
                <i className="fas fa-file-alt me-1"></i> Case Study
              </Link>
              <Link target="_blank" to="https://bet.eazyply.com/" className="btn btn-sm btn-outline-secondary">
                <i className="fas fa-external-link-alt"></i>
              </Link>
            </div>
          </div>
          <p className="mb-3" style={{ lineHeight: '1.6' }}>
            Developed sports-betting platform with real-time odds, secure transactions, and mobile API support.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-primary">Laravel</span>
            <span className="badge bg-info text-dark">MySQL</span>
            <span className="badge bg-warning text-dark">REST API</span>
          </div>
        </div>

        {/* Sonicnota */}
        <div className="rounded shadow-sm border p-3 mb-3 hover-lift" style={{ transition: 'all 0.3s ease' }}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>Sonicnota</h5>
              <p className="text-muted small mb-0">Full Stack Developer</p>
            </div>
            <div className="d-flex gap-2">
              <Link to="/case-study/sonicnota" className="btn btn-sm primaryBg text-white">
                <i className="fas fa-file-alt me-1"></i> Case Study
              </Link>
              <Link target="_blank" to="https://www.sonicnota.com/" className="btn btn-sm btn-outline-secondary">
                <i className="fas fa-external-link-alt"></i>
              </Link>
            </div>
          </div>
          <p className="mb-3" style={{ lineHeight: '1.6' }}>
            AI-powered voice productivity tool transforming recordings into structured content. Built AI engine with Whisper, GPT, Gemini, and Supabase.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-dark">Next.js</span>
            <span className="badge bg-primary">Node.js</span>
            <span className="badge bg-success">Supabase</span>
            <span className="badge bg-secondary">Whisper AI</span>
            <span className="badge bg-warning text-dark">GPT</span>
            <span className="badge bg-info text-dark">Gemini</span>
          </div>
        </div>

        {/* Nymous */}
        <div className="rounded shadow-sm border p-3 mb-3 hover-lift" style={{ transition: 'all 0.3s ease' }}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>Nymous</h5>
              <p className="text-muted small mb-0">Full Stack Developer</p>
            </div>
            <Link target="_blank" to="https://nymous-app.netlify.app/" className="btn btn-sm btn-outline-secondary">
              <i className="fas fa-external-link-alt"></i>
            </Link>
          </div>
          <p className="mb-3" style={{ lineHeight: '1.6' }}>
            Interactive anonymous messaging platform with gamification features.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-dark">React</span>
            <span className="badge bg-primary">Firebase</span>
            <span className="badge bg-warning text-dark">Tailwind</span>
          </div>
        </div>

        {/* Pikup Admin */}
        <div className="rounded shadow-sm border p-3 mb-3 hover-lift" style={{ transition: 'all 0.3s ease' }}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>Pikup Admin Dashboard</h5>
              <p className="text-muted small mb-0">Full Stack Developer</p>
            </div>
            <Link target="_blank" to="https://pikup-control.vercel.app/" className="btn btn-sm btn-outline-secondary">
              <i className="fas fa-external-link-alt"></i>
            </Link>
          </div>
          <p className="mb-3" style={{ lineHeight: '1.6' }}>
            Comprehensive admin dashboard for monitoring and managing application activities in real-time.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-dark">Next.js</span>
            <span className="badge bg-primary">Node.js</span>
            <span className="badge bg-info text-dark">MongoDB</span>
          </div>
        </div>

        {/* Pikup Website */}
        <div className="rounded shadow-sm border p-3 mb-3 hover-lift" style={{ transition: 'all 0.3s ease' }}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>Pikup Landing Page</h5>
              <p className="text-muted small mb-0">Frontend Developer</p>
            </div>
            <Link target="_blank" to="https://pikup-six.vercel.app/" className="btn btn-sm btn-outline-secondary">
              <i className="fas fa-external-link-alt"></i>
            </Link>
          </div>
          <p className="mb-3" style={{ lineHeight: '1.6' }}>
            High-converting waitlist landing page built for early user acquisition.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-dark">Next.js</span>
            <span className="badge bg-success">Tailwind</span>
          </div>
        </div>

        {/* Dancefitltd */}
        <div className="rounded shadow-sm border p-3 mb-3 hover-lift" style={{ transition: 'all 0.3s ease' }}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>DanceFit Ltd</h5>
              <p className="text-muted small mb-0">Full Stack Developer</p>
            </div>
            <Link target="_blank" to="https://dancefitltd.co.uk/" className="btn btn-sm btn-outline-secondary">
              <i className="fas fa-external-link-alt"></i>
            </Link>
          </div>
          <p className="mb-3" style={{ lineHeight: '1.6' }}>
            Professional website for dance class services with booking and scheduling features.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-dark">React</span>
            <span className="badge bg-info text-dark">Bootstrap</span>
            <span className="badge bg-warning text-dark">PHP</span>
          </div>
        </div>

        {/* Losung */}
        <div className="rounded shadow-sm border p-3 mb-3 hover-lift" style={{ transition: 'all 0.3s ease' }}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>Losung Consult</h5>
              <p className="text-muted small mb-0">Full Stack Developer</p>
            </div>
            <Link target="_blank" to="https://losungconsult.com/" className="btn btn-sm btn-outline-secondary">
              <i className="fas fa-external-link-alt"></i>
            </Link>
          </div>
          <p className="mb-3" style={{ lineHeight: '1.6' }}>
            Corporate consulting website showcasing services and client testimonials.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-primary">Laravel</span>
            <span className="badge bg-info text-dark">MySQL</span>
          </div>
        </div>

        {/* Neyoo & Tee Tech */}
        <div className="rounded shadow-sm border p-3 mb-3 hover-lift" style={{ transition: 'all 0.3s ease' }}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>Neyoo & Tee Tech</h5>
              <p className="text-muted small mb-0">Full Stack Developer</p>
            </div>
            <Link target="_blank" to="https://neyooandteetech.com/" className="btn btn-sm btn-outline-secondary">
              <i className="fas fa-external-link-alt"></i>
            </Link>
          </div>
          <p className="mb-3" style={{ lineHeight: '1.6' }}>
            CCTV installation company website with service catalog and quote request system.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-dark">CodeIgniter</span>
            <span className="badge bg-secondary">Bootstrap</span>
            <span className="badge bg-warning text-dark">PHP</span>
          </div>
        </div>
          </>
        )}
      </div>

      {/* Show More/Less Button */}
      <div className="text-center my-4">
        <button 
          className="btn btn-lg px-5 "
          onClick={() => setShowAll(!showAll)}
          style={{ borderRadius: '50px', fontWeight: '600' }}
        >
          {showAll ? (
            <>
              Show Less <i className="fas fa-chevron-up ms-2"></i>
            </>
          ) : (
            <>
              View More Projects <i className="fas fa-chevron-down ms-2"></i>
            </>
          )}
        </button>
      </div>

     
    </div>
  );
}

export default SeeLatestWork;
