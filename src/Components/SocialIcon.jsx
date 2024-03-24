import React from "react";
import { Link } from "react-router-dom";

function SocialIcon() {
  return (
    <div
      className="rounded shadow px-1 pt-2 d-flex flex-column conn1"
    >
        <h3 className='smal small fw-semibold my-1'>Connect Me</h3>
      <div className="d-flex px-2">
        <div className="shadow  socialCon mb-3 ">
         <Link target='_blank' to='https://github.com/Webprowale'><i className="fab fa-github"></i></Link>
        </div>
        <div className="mx-2 shadow  socialCon">
         <Link target='_blank' to='https://www.linkedin.com/in/webprowale-akinwale'> <i className="fab fa-linkedin-in"></i> </Link>
        </div>
      </div>
    </div>
  );
}

export default SocialIcon;
