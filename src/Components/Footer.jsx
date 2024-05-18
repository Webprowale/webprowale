import React from "react";
import { Link } from "react-router-dom";
const date = new Date();
const year = date.getFullYear();
function Footer() {
  return (
    <div className="container-fluid pt-2 pb-1 mt-5">
      <div className="mx-auto">
      <div className=" text-center">
        <span className="fw-semibold fs-5">&copy;{year}</span>
        <Link className=" fs-5 fw-semibold ms-1 ">Webprowale</Link>
      </div>
      </div>
    </div>
  );
}

export default Footer;
