import React from "react";

const SITE = "https://webprowale.com";
const year = new Date().getFullYear();

const links = ["AI Engineering", "Software Development", "Business Automation", "Custom AI Systems"];
const socials = [
  { icon: "fa-github", brand: true },
  { icon: "fa-linkedin-in", brand: true },
  { icon: "fa-x-twitter", brand: true },
  { icon: "fa-youtube", brand: true },
];

function Footer() {
  return (
    <footer className="wp">
      <div className="wp-footer container-fluid px-3 px-lg-5 py-4">
        <div className="row align-items-center g-3">
          <div className="col-lg-4">
            <span className="text-muted-wp" style={{ fontSize: ".85rem" }}>
              &copy; {year} Webprowale. All rights reserved.
            </span>
          </div>
          <div className="col-lg-5 d-flex flex-wrap gap-3 justify-content-lg-center">
            {links.map((l) => (
              <a key={l} href={SITE} target="_blank" rel="noopener noreferrer" className="wp-foot-link">{l}</a>
            ))}
          </div>
          <div className="col-lg-3 d-flex gap-2 justify-content-lg-end">
            {socials.map((s) => (
              <a key={s.icon} href={SITE} target="_blank" rel="noopener noreferrer" className="wp-social">
                <i className={`fab ${s.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
