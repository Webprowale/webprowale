import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const skillCategories = [
  {
    category: "Frontend",
    icon: "fas fa-laptop-code",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Backend",
    icon: "fas fa-server",
    skills: ["Node.js", "NestJS", "Laravel", "PHP", "CodeIgniter", "Python"]
  },
  {
    category: "Database & APIs",
    icon: "fas fa-database",
    skills: ["PostgreSQL", "MySQL", "REST API", "GraphQL", "Redis"]
  },
  {
    category: "DevOps & Tools",
    icon: "fas fa-cogs",
    skills: ["Git", "CI/CD", "Docker", "Azure", "AWS"]
  }
];

function SkillTools() {
  const con = useRef(null);

  useGSAP(() => {
    gsap.from(con.current, {
      duration: 3.5,
      ease: "power2.out",
      y: 100,
      opacity: 0
    });
  }, []);

  return (
    <div className="rounded shadow px-4 pt-4 pb-4 d-flex flex-column con1 mt-2" ref={con}>
      <div className="text-center mb-4">
        <h4 className="fw-bold mb-2" style={{ fontSize: '1.75rem' }}>Technical Expertise</h4>
        <p className="text-muted mb-0">Full-stack proficiency across modern web technologies</p>
      </div>

      {skillCategories.map((category, index) => (
        <div key={index} className="mb-4">
          <div className="d-flex align-items-center mb-3">
            <i className={`${category.icon} me-2 primaryColor`} style={{ fontSize: '1.2rem' }}></i>
            <h5 className="fw-bold mb-0" style={{ fontSize: '1.1rem' }}>{category.category}</h5>
          </div>
          <div className="d-flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <span 
                key={skillIndex} 
                className="badge bg-light text-dark border px-3 py-2"
                style={{ fontSize: '0.9rem', fontWeight: '500' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-3 p-3 rounded" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <div className="d-flex align-items-center">
          <i className="fas fa-rocket me-3" style={{ fontSize: '2rem' }}></i>
          <div>
            <p className="mb-1 fw-bold">Ready to build something great?</p>
            <p className="mb-0 small">Let's turn your vision into a scalable, production-ready solution.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillTools;
