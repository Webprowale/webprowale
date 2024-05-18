import React from "react";
import LazyLoad from 'react-lazyload';
import Dev from "../Images/webb2.png";
import { Link } from "react-router-dom";
function Biography() {
  return (
    <div className="rounded shadow px-3 pt-2 d-flex flex-column con1 mb-2">
      <div className=" primaryBg rounded mb-1">
      <LazyLoad height={200} offset={100}>
        <img src={Dev} className="img-fluid" height={100} />
        </LazyLoad>
      </div>
      <h3 className=" primaryColor rounded fs-6 fw-bold">I'm Webprowale</h3>
      <p className="lead small fw-semibold">
        Crafting Tomorrow's Web for a Better Experience
      <br />
        building responsive interfaces, optimizing performance, or enhancing
        accessibility cross the globe
      </p>
      <Link to='/resume' className="btn fw-semibold primaryBg text-white mb-3">View Resume</Link>
    </div>
  );
}

export default Biography;
