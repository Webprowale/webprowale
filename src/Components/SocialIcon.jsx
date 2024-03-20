import React from "react";
import { Link } from "react-router-dom";

function SocialIcon() {
  return (
    <div
      className="rounded shadow px-3 py-3 d-flex flex-column conn1 hon1"
    >
      <div className="d-flex mx-auto">
        <div className="shadow  socialCon mx-2">
         <Link target='_blank' to='https://github.com/Webprowale'><i className="fab fa-github"></i></Link>
        </div>
        <div className="mx-2 shadow  socialCon">
         <Link target='_blank' to='https://www.linkedin.com/in/webprowale-akinwale'> <i className="fab fa-linkedin-in"></i> </Link>
        </div>
      </div>
      <div className="d-flex mt-2 ms-3 align-items-center" >
        <h3 className='smal small fw-semibold me-lg-5'>Connect Me</h3>
       <Link target='_blank' to='https://www.linkedin.com/in/webprowale-akinwale' ><i className="fas fa-arrow-circle-right fs-5 primaryColor me-2"></i></Link>
    </div>
    </div>
  );
}

export default SocialIcon;
