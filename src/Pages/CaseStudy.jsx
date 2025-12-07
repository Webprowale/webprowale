import React from 'react';
import { useParams, Link } from 'react-router-dom';

const caseStudies = {
  immigify: {
    title: "Immigify - AI-Powered Immigration Platform",
    tagline: "Revolutionizing immigration interviews with AI",
    challenge: "Build a scalable AI-powered platform that can conduct and evaluate immigration interviews efficiently while maintaining accuracy and compliance with immigration regulations.",
    solution: "Led the engineering team in building Immigify's AI-powered immigration and recruitment platform. Directed development of an AI Interview system with Laravel (backend), ReactJS (frontend), and Python on Azure for AI/ML model training and deployment. Configured and optimized cloud servers, implemented RESTful APIs, and integrated dual databases — MySQL for the core Laravel application and PostgreSQL as a vector store to support AI-driven candidate evaluation.",
    results: [
      "50% faster interview processing time",
      "10,000+ successful interviews conducted",
      "95% accuracy in interview evaluations",
      "Reduced manual review time by 70%"
    ],
    tech: ["Laravel", "React", "Python", "Azure AI", "MySQL", "PostgreSQL", "Redis"],
    image: "https://via.placeholder.com/1200x600/8121d0/ffffff?text=Immigify+Platform",
    features: [
      "Real-time AI interview system",
      "Automated document verification",
      "Multi-language support",
      "Advanced analytics dashboard",
      "Secure data encryption",
      "CI/CD pipeline implementation",
      "Vector database integration"
    ],
    link: "https://immigify.com"
  },
  thejobwise: {
    title: "TheJobwise - AI-Powered Job Matching Platform",
    tagline: "Connecting talent with opportunities through AI",
    challenge: "Create a backend infrastructure for an AI-powered job-matching platform that can handle high volumes of applications, process resumes intelligently, and provide seamless user account management at scale.",
    solution: "Engineered the backend for TheJobwise using Node.js and NestJS framework with PostgreSQL database. Developed RESTful APIs for application flows, AI-driven resume processing, and user account management—ensuring performance at scale and a smooth user experience.",
    results: [
      "Handles thousands of daily job applications",
      "AI-driven resume matching with 90%+ accuracy",
      "Sub-second API response times",
      "Scalable architecture for future growth"
    ],
    tech: ["Node.js", "NestJS", "PostgreSQL", "REST API", "TypeScript"],
    image: "https://via.placeholder.com/1200x600/8121d0/ffffff?text=TheJobwise+Platform",
    features: [
      "RESTful API architecture",
      "AI-powered resume processing",
      "User authentication and authorization",
      "Job matching algorithms",
      "Real-time application tracking",
      "Scalable database design"
    ],
    link: "https://thejobwise.com"
  },
  afrohealth: {
    title: "Afrohealth - Healthcare Recruitment Portal",
    tagline: "Streamlining healthcare recruitment and training",
    challenge: "Develop a comprehensive healthcare recruitment and training portal that handles multiple payment providers, provides certification information, immigration support, and job matching services while ensuring reliability and responsiveness.",
    solution: "Led development of the healthcare portal implementing a multiple payment gateway system using the Strategy Pattern for seamless integration of Paystack, Stripe, and Flutterwave. Built an AI-powered agent with Node.js to automate candidate support and handle real-time queries. Integrated user flows for both candidates and employers with optimized data handling.",
    results: [
      "Integrated 3 major payment gateways",
      "AI agent handling 1000+ queries monthly",
      "Improved candidate onboarding efficiency by 60%",
      "Seamless employer-candidate matching"
    ],
    tech: ["Laravel", "MySQL", "Node.js", "Strategy Pattern", "Paystack", "Stripe", "Flutterwave"],
    image: "https://via.placeholder.com/1200x600/8121d0/ffffff?text=Afrohealth+Portal",
    features: [
      "Multiple payment gateway integration",
      "AI-powered candidate support",
      "Certification tracking system",
      "Immigration support resources",
      "Job matching algorithms",
      "Real-time candidate queries",
      "Employer dashboard"
    ],
    link: "https://afrohealth.care"
  },
  sonicnota: {
    title: "Sonicnota - AI Voice Productivity Tool",
    tagline: "Transform voice recordings into intelligent content",
    challenge: "Create an AI-powered voice productivity tool that transforms spoken recordings into intelligent, structured content with high accuracy and speed while supporting multiple AI models for contextual summarization.",
    solution: "Built an AI engine that uses Whisper for transcription, GPT and Gemini for contextual summarization, and Supabase for authentication and storage. Developed with Next.js for the frontend and Node.js for backend processing, deployed for optimal performance and reliability.",
    results: [
      "95%+ transcription accuracy",
      "Process recordings in real-time",
      "Support for multiple AI models",
      "Secure cloud storage integration"
    ],
    tech: ["Next.js", "Node.js", "Supabase", "Whisper AI", "OpenAI GPT", "Gemini", "TypeScript"],
    image: "https://via.placeholder.com/1200x600/8121d0/ffffff?text=Sonicnota+AI",
    features: [
      "Real-time voice transcription",
      "AI-powered summarization",
      "Multi-model AI support",
      "Secure authentication",
      "Cloud storage integration",
      "Export to multiple formats",
      "User-friendly interface"
    ],
    link: "https://www.sonicnota.com"
  },
  hostnownow: {
    title: "HostNowNow - Hosting Service Platform",
    tagline: "Modern hosting platform with seamless user experience",
    challenge: "Revamp the frontend of a hosting service platform to deliver a modern, responsive user interface with improved navigation and performance optimization across all devices.",
    solution: "Redesigned and rebuilt the frontend with focus on user experience, implementing modern UI/UX principles, improved navigation structure, and performance optimizations to ensure seamless interaction across desktop, tablet, and mobile devices.",
    results: [
      "40% improvement in page load times",
      "Enhanced user engagement metrics",
      "Fully responsive across all devices",
      "Modern, intuitive interface"
    ],
    tech: ["React", "UI/UX Design", "Responsive Design", "Performance Optimization"],
    image: "https://via.placeholder.com/1200x600/8121d0/ffffff?text=HostNowNow+Platform",
    features: [
      "Modern UI/UX design",
      "Responsive layout system",
      "Optimized performance",
      "Intuitive navigation",
      "Cross-device compatibility",
      "Fast page transitions"
    ],
    link: "https://www.hostnownow.com"
  },
  fortunetimer: {
    title: "FortuneTimer - Sports Betting Platform",
    tagline: "Dynamic sports betting with real-time odds",
    challenge: "Develop a dynamic sports-betting platform with real-time odds display, secure user authentication, seamless betting flows, and a mobile API to support cross-platform access.",
    solution: "Developed using Laravel framework with real-time odds integration, user authentication system, and secure transaction handling with seamless UI/UX. Built REST API for mobile app integration ensuring consistent experience across platforms.",
    results: [
      "Real-time odds updates",
      "Secure transaction processing",
      "Mobile and web platform support",
      "Seamless betting experience"
    ],
    tech: ["Laravel", "MySQL", "REST API", "Real-time Updates", "Payment Integration"],
    image: "https://via.placeholder.com/1200x600/8121d0/ffffff?text=FortuneTimer+Platform",
    features: [
      "Real-time odds display",
      "User authentication system",
      "Secure betting flows",
      "Transaction management",
      "Mobile API integration",
      "Seamless UI/UX",
      "Payment gateway integration"
    ],
    link: "https://bet.eazyply.com"
  }
};

function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies[slug];

  if (!study) {
    return (
      <div className="container my-5 text-center">
        <h2 className="primaryColor">Case Study Not Found</h2>
        <Link to="/" className="btn primaryBg text-white mt-3">
          <i className="fas fa-home me-2"></i>
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container-fluid px-lg-5 py-5">
      {/* Hero Section */}
      <div className="row mb-5">
        <div className="col-12">
          <Link to="/" className="btn btn-outline-secondary mb-3">
            <i className="fas fa-arrow-left me-2"></i>
            Back to Home
          </Link>
          <h1 className="primaryColor fw-bold display-4">{study.title}</h1>
          <p className="lead text-muted">{study.tagline}</p>
        </div>
      </div>

      {/* Featured Image */}
      <div className="row mb-5">
        <div className="col-12">
          <img 
            src={study.image} 
            className="img-fluid rounded shadow-lg w-100" 
            alt={study.title}
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Tech Stack */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="fw-bold mb-3">
                <i className="fas fa-code me-2 primaryColor"></i>
                Technology Stack
              </h5>
              <div className="d-flex flex-wrap gap-2">
                {study.tech.map((tech, i) => (
                  <span key={i} className="badge primaryBg text-white px-3 py-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge, Solution, Results */}
      <div className="row mb-5">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h4 className="fw-bold primaryColor mb-3">
                <i className="fas fa-exclamation-circle me-2"></i>
                Challenge
              </h4>
              <p>{study.challenge}</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h4 className="fw-bold primaryColor mb-3">
                <i className="fas fa-lightbulb me-2"></i>
                Solution
              </h4>
              <p>{study.solution}</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h4 className="fw-bold primaryColor mb-3">
                <i className="fas fa-chart-line me-2"></i>
                Results
              </h4>
              <ul className="list-unstyled">
                {study.results.map((result, i) => (
                  <li key={i} className="mb-2">
                    <i className="fas fa-check-circle primaryColor me-2"></i>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="fw-bold primaryColor mb-4">
                <i className="fas fa-star me-2"></i>
                Key Features
              </h4>
              <div className="row">
                {study.features.map((feature, i) => (
                  <div key={i} className="col-md-6 mb-3">
                    <div className="d-flex align-items-start">
                      <i className="fas fa-check-circle primaryColor me-3 mt-1"></i>
                      <span>{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="row">
        <div className="col-12 text-center">
          <div className="card shadow-sm border-0 primaryBg text-white">
            <div className="card-body py-5">
              <h3 className="fw-bold mb-3">Interested in Working Together?</h3>
              <p className="mb-4">Let's discuss how I can help bring your project to life.</p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                {study.link !== '#' && (
                  <a 
                    href={study.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-light"
                  >
                    <i className="fas fa-external-link-alt me-2"></i>
                    View Live Project
                  </a>
                )}
                <Link to="/" className="btn btn-outline-light">
                  <i className="fas fa-envelope me-2"></i>
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
