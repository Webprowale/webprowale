import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const skills = [
  "HTML", "CSS", "Bootstrap", "Tailwind", "JavaScript", "Typescript",
  "React", "Nextjs", "Nodejs", "Nestjs", "PHP", "Codeigniter",
  "Laravel", "MySQL PostgreSQL", "Version Control & CI/CD"
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
    <div className="rounded shadow px-4 pt-2 d-flex flex-column con1 mt-2" ref={con}>
      <h4 className="mt-3 fs-5 fw-bold">My Core Contributions</h4>
      <p className="text-start">
        As a seasoned Full-Stack Software Engineer, I specialize in building reliable and scalable web systems using modern technologies like <strong>ReactJS, NextJS, NodeJS, and NestJS</strong> on the JavaScript side, as well as <strong>PHP, Laravel, and CodeIgniter</strong> for full-stack and backend development.
      </p>
      <p className="text-start">
        I architect and implement robust backend solutions powered by <strong>RESTful and GraphQL APIs</strong>, while delivering engaging, performant frontends. From startups to established brands, I help businesses launch and scale digital products with efficiency, maintainability, and performance in mind.
      </p>

      <p className="fs-6 fw-semibold">My toolkit includes</p>
      <div className="row">
        {skills.map((skill, index) => (
          <h6 key={index} className="col-4 btn shadow primaryColor mb-2">
            {skill}
          </h6>
        ))}
      </div>

      <div className="mx-auto shadow rounded mb-3 mt-2">
        <marquee>Ensuring A Dynamic And Efficient Approach To Every Project.</marquee>
      </div>
    </div>
  );
}

export default SkillTools;
