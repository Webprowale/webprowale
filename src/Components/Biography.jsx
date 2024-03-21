import React from "react";
import Dev from "../Images/webb2.png";
import { Link } from "react-router-dom";
function Biography() {
  return (
    <div className="rounded shadow px-3 pt-2 d-flex flex-column con1">
      <div className=" primaryBg rounded mb-3">
        <img src={Dev} className="img-fluid mx-4 ms-lg-0" height={100} />
      </div>
      <h3 className=" primaryColor rounded fs-6 fw-bold">I'm Webprowale</h3>
      <p className="lead small fw-semibold">
        Crafting Tomorrow's Web for a Better Experience
      <br />
        building responsive interfaces, optimizing performance, or enhancing
        accessibility cross the globe
      </p>
    </div>
  );
}

export default Biography;
