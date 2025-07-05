import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function SeeLatestWork() {
  const con = useRef(null);

  useGSAP(() => {
    gsap.from(con.current, {
      duration: 3.5,
      ease: "bounce.out",
      y: 200,
    });
  });

  return (
    <div
      className="rounded shadow px-3 pt-2 d-flex flex-column mt-2 con1"
      ref={con}
    >
      <div className="mx-auto mt-1">
        <h6 className="fs-4 fw-bold">See My</h6>
        <h5 className="fs-5 fw-bold ms-4">Latest Work</h5>
      </div>

      <p className="text-start mt-2">
        Here’s a curated selection of real-world projects I’ve worked on — from
        AI-powered transcription apps and full-scale admin dashboards to modern
        company websites and service platforms. Each solution reflects my
        strength in delivering high-quality web experiences using cutting-edge
        technologies like <strong>React</strong>, <strong>Next.js</strong>,{" "}
        <strong>Node.js</strong>, <strong>NestJS</strong>, and{" "}
        <strong>Laravel/CodeIgniter</strong>. Whether it's crafting intuitive
        frontends or developing secure and scalable backend APIs (REST &
        GraphQL), I focus on building tools that drive real value for businesses
        and users alike.
      </p>

      <div className="d-flex flex-column">
        {/* Sonicnota */}

        <div className="rounded shadow p-2 mb-2">
          <Link target="_blank" to="https://www.sonicnota.com/">
            <div className="d-flex align-items-end justify-content-end">
              <i className="fas fa-external-link-alt"></i>
            </div>
            <h5 className="fw-bold fs-6">Sonicnota</h5>
            <p>
              Sonicnota is an AI-powered voice productivity tool. It transforms
              spoken recordings into intelligent, structured content. I built an
              AI engine that uses Whisper (for transcription), GPT and Gemini
              (for contextual summarization), and Supabase for authentication
              and storage. Built with Next.js, Node.js, and deployed for
              performance and reliability.
            </p>
            <div className="mt-1">
              <span className="badge bg-dark me-1">Next.js</span>
              <span className="badge bg-primary me-1">Node.js</span>
              <span className="badge bg-success me-1">Supabase</span>
              <span className="badge bg-secondary me-1">Whisper AI</span>
              <span className="badge bg-warning text-dark me-1">
                OpenAI GPT
              </span>
              <span className="badge bg-info text-dark me-1">Gemini</span>
              <span className="badge bg-danger me-1">AI Agent</span>
            </div>
          </Link>
        </div>

        {/* Nymous */}
        <div className="rounded shadow p-2 mb-2">
          <Link target="_blank" to="https://nymous-app.netlify.app/">
            <div className="d-flex align-items-end justify-content-end">
              <i className="fas fa-external-link-alt"></i>
            </div>
            <h5 className="fw-bold fs-6">Nymous</h5>
            <p>An interactive anonymous messaging platform with a dare game.</p>
            <div className="mt-1">
              <span className="badge bg-dark me-1">React</span>
              <span className="badge bg-primary me-1">Firebase</span>
              <span className="badge bg-warning text-dark me-1">Tailwind</span>
            </div>
          </Link>
        </div>

        {/* Pikup Admin */}
        <div className="rounded shadow p-2 mb-2">
          <Link target="_blank" to="https://pikup-control.vercel.app/">
            <div className="d-flex align-items-end justify-content-end">
              <i className="fas fa-external-link-alt"></i>
            </div>
            <h5 className="fw-bold fs-6">Pikup Admin</h5>
            <p>
              Fully functional admin dashboard built with Next.js to monitor and
              manage app activities.
            </p>
            <div className="mt-1">
              <span className="badge bg-dark me-1">Next.js</span>
              <span className="badge bg-primary me-1">Node.js</span>
              <span className="badge bg-info text-dark me-1">MongoDB</span>
            </div>
          </Link>
        </div>

        {/* Pikup Website */}
        <div className="rounded shadow p-2 mb-2">
          <Link target="_blank" to="https://pikup-six.vercel.app/">
            <div className="d-flex align-items-end justify-content-end">
              <i className="fas fa-external-link-alt"></i>
            </div>
            <h5 className="fw-bold fs-6">Pikup Website</h5>
            <p>
              A waitlist landing page for Pikup built to capture early access
              users.
            </p>
            <div className="mt-1">
              <span className="badge bg-dark me-1">Next.js</span>
              <span className="badge bg-success me-1">Tailwind</span>
            </div>
          </Link>
        </div>

        {/* Dancefitltd */}
        <div className="rounded shadow p-2 mb-2">
          <Link target="_blank" to="https://dancefitltd.co.uk/">
            <div className="d-flex align-items-end justify-content-end">
              <i className="fas fa-external-link-alt"></i>
            </div>
            <h5 className="fw-bold fs-6">Dancefitltd</h5>
            <p>A company website offering dance classes as a service.</p>
            <div className="mt-1">
              <span className="badge bg-dark me-1">React</span>
              <span className="badge bg-info text-dark me-1">Bootstrap</span>
              <span className="badge bg-warning text-dark me-1">PHP</span>
            </div>
          </Link>
        </div>

        {/* Losung */}
        <div className="rounded shadow p-2 mb-2">
          <Link target="_blank" to="https://losungconsult.com/">
            <div className="d-flex align-items-end justify-content-end">
              <i className="fas fa-external-link-alt"></i>
            </div>
            <h5 className="fw-bold fs-6">Losung Consult</h5>
            <p>Corporate consulting company site for showcasing services.</p>
            <div className="mt-1">
              <span className="badge bg-primary me-1">Laravel</span>
              <span className="badge bg-info text-dark me-1">MySQL</span>
            </div>
          </Link>
        </div>

        {/* Neyoo & Tee Tech */}
        <div className="rounded shadow p-2 mb-2">
          <Link target="_blank" to="https://neyooandteetech.com/">
            <div className="d-flex align-items-end justify-content-end">
              <i className="fas fa-external-link-alt"></i>
            </div>
            <h5 className="fw-bold fs-6">Neyoo & Tee Tech</h5>
            <p>
              A CCTV installation company site highlighting services offered.
            </p>
            <div className="mt-1">
              <span className="badge bg-dark me-1">CodeIgniter</span>
              <span className="badge bg-secondary me-1">Bootstrap</span>
              <span className="badge bg-warning text-dark me-1">PHP</span>
            </div>
          </Link>
        </div>
      </div>

      <p className="fw-semibold mt-3">
        See more on{" "}
        <Link target="_blank" to="https://github.com/Webprowale">
          GitHub <i className="fas fa-external-link-alt"></i>
        </Link>
      </p>
    </div>
  );
}

export default SeeLatestWork;
