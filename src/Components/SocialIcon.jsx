import React from "react";
import { Link } from "react-router-dom";

function SocialIcon() {
  return (
    <div
      className="rounded shadow px-1 pt-2 d-flex flex-column "
    >
      <div className="d-flex">
        <div className="shadow  socialCon mx-2">
         <Link target='_blank' to='https://github.com/Webprowale'><i className="fab fa-github"></i></Link>
        </div>
        <div className="mx-2 shadow  socialCon">
         <Link target='_blank' to='https://www.linkedin.com/in/webprowale-akinwale'> <i className="fab fa-linkedin-in"></i> </Link>
        </div>
      </div>
      <div className="d-flex mt-3 ms-2 align-items-center mb-0" >
        <h3 className='smal small fw-semibold'>Connect Me</h3>
       <Link target='_blank' to='https://www.linkedin.com/in/webprowale-akinwale' ><i className="fas fa-arrow-circle-right fs-5 primaryColor "></i></Link>
    </div>
    </div>
  );
}

export default SocialIcon;
