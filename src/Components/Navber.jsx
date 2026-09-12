import React from "react";
import { Link } from "react-router-dom";

const SITE = "https://webprowale.com";

function Navber() {
  return (
    <nav className="wp-nav">
      <div className="container-fluid px-3 px-lg-5 py-2 d-flex align-items-center justify-content-between">
        <Link to="/" className="d-flex align-items-center gap-2">
          <span className="wp-logo-badge">W</span>
          <span className="d-flex flex-column">
            <span className="wp-logo-title">Webprowale</span>
            <span className="wp-logo-sub">AI Engineering for Real Businesses</span>
          </span>
        </Link>

        <div className="d-none d-lg-flex align-items-center gap-4">
          <a href="#top" className="wp-navlink">Home</a>
          <a href="#services" className="wp-navlink">What We Do</a>
          <a href="#services" className="wp-navlink">Services</a>
          <a href="#cta" className="wp-navlink">About</a>
        </div>

        <a href={SITE} target="_blank" rel="noopener noreferrer" className="wp-btn-grad">
          Go to Webprowale.com <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </nav>
  );
}
export default Navber;
