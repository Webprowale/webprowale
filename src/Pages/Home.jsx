import React from "react";
import MetaTags from "../Components/MetaTags";

const SITE = "https://webprowale.com";

const features = [
  { icon: "fa-users", title: "Startups", sub: "MVP to Scale" },
  { icon: "fa-building", title: "Businesses", sub: "Automation & AI" },
  { icon: "fa-code", title: "Teams", sub: "Custom Solutions" },
];

const services = [
  { icon: "fa-code", title: "Custom Software Development", text: "Web and mobile applications built for your specific needs." },
  { icon: "fa-robot", title: "AI Agent Development", text: "Intelligent agents that understand, reason and take action." },
  { icon: "fa-gears", title: "Business Automation", text: "Automate repetitive work and connect your tools and systems." },
  { icon: "fa-diagram-project", title: "Custom AI Architecture", text: "RAG, private AI systems and scalable AI infrastructure." },
  { icon: "fa-link", title: "Integrations & APIs", text: "Connect AI with your existing tools, databases and platforms." },
  { icon: "fa-rocket", title: "Startup Development", text: "From idea to MVP to scale. We help you build and launch your product." },
];

function Home() {
  return (
    <div className="wp" id="top">
      <MetaTags
        title="Webprowale - AI Engineering Company | AI Agents, Automation & Custom AI Software"
        description="Webprowale is an AI engineering company that helps startups and businesses build custom software, intelligent AI agents, and automation systems that solve real-world problems."
        url="https://webprowale.com"
      />

      <section className="container-fluid px-3 px-lg-5 pt-5 pb-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="wp-pill mb-4"><span className="wp-dot"></span> From Ideas to Intelligent Systems</span>
            <h1 className="wp-hero-title mt-3">
              Webprowale<br />
              <span className="wp-grad-text">Builds What's</span> Next
            </h1>
            <p className="wp-hero-sub mt-4">
              We are an AI engineering company that helps startups and businesses build custom
              software, intelligent AI agents, and automation systems that solve real-world problems.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href={SITE} target="_blank" rel="noopener noreferrer" className="wp-btn-grad">
                Visit Webprowale.com <i className="fas fa-arrow-right"></i>
              </a>
              <a href={SITE} target="_blank" rel="noopener noreferrer" className="wp-btn-ghost">
                <i className="fas fa-play"></i>
                <span className="d-flex flex-column align-items-start lh-1">
                  <span className="fw-semibold">Watch Our Work</span>
                  <span className="text-muted-wp" style={{ fontSize: ".72rem" }}>1 min</span>
                </span>
              </a>
            </div>

            <div className="d-flex flex-wrap gap-4 mt-5">
              {features.map((f) => (
                <div className="d-flex align-items-center gap-2" key={f.title}>
                  <span className="wp-feature-ico"><i className={`fas ${f.icon}`}></i></span>
                  <span className="d-flex flex-column">
                    <span className="wp-feature-t">{f.title}</span>
                    <span className="wp-feature-s">{f.sub}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 wp-hero-art">
            <img
              src="/online-presence-of-webprowale.png"
              alt="Webprowale AI engineering illustration"
              className="img-fluid wp-hero-image"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="container-fluid px-3 px-lg-5 py-5" id="services">
        <p className="wp-eyebrow mb-2">Our Services</p>
        <div className="row align-items-end mb-4 g-3">
          <div className="col-lg-7">
            <h2 className="wp-section-title mb-0">Everything You Need to Build, Automate and Scale</h2>
          </div>
          <div className="col-lg-5">
            <p className="text-muted-wp mb-0" style={{ fontSize: ".9rem" }}>
              From custom software to AI agents, we provide end-to-end engineering solutions for modern businesses.
            </p>
          </div>
        </div>

        <div className="row g-3">
          {services.map((s) => (
            <div className="col-md-6 col-lg-4" key={s.title}>
              <div className="wp-service">
                <span className="wp-service-ico"><i className={`fas ${s.icon}`}></i></span>
                <h5>{s.title}</h5>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-fluid px-3 px-lg-5 pb-5" id="cta">
        <div className="wp-cta p-4 p-lg-5 d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-4">
          <div>
            <p className="wp-eyebrow mb-2">Ready to Build Something Great?</p>
            <h3 className="fw-bold mb-2" style={{ color: "#0f172a" }}>Let's build the future together.</h3>
            <p className="text-muted-wp mb-0" style={{ fontSize: ".92rem", maxWidth: "38rem" }}>
              Visit Webprowale.com to learn more about our services, projects, and how we can work with you.
            </p>
          </div>
          <a href={SITE} target="_blank" rel="noopener noreferrer" className="wp-btn-grad flex-shrink-0">
            Go to Webprowale.com <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
