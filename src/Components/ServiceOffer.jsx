import React from "react";
import LazyLoad from "react-lazyload";
import web from "../Images/web1.png";
import appD from "../Images/app.png";
import graphic from "../Images/graphics.png";
import seo from "../Images/seo.png";
function ServiceOffer() {
  return (
    <div className="rounded mt-3 shadow px-3 py-3 d-flex flex-column con1"data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom">
      <h4 className="fs-2 fw-bold mb-3 ">Service Offer</h4>
      <div className="row" style={{ justifyContent: "space-evenly" }}>
        <div className="col col-6 d-flex flex-column pt-2 ">
          <LazyLoad height={200} offset={100}>
            <img src={graphic} className="img-fluid" />
          </LazyLoad>
          <small className="fw-bold ms-4 fs-6">Graphic Design</small>
        </div>
        <div className="col col-6 d-flex flex-column">
          <LazyLoad height={200} offset={100}>
            <img src={seo} className="img-fluid" />
          </LazyLoad>
          <small className="fw-bold fs-6">SEO Optimization</small>
        </div>
        <div className="col col-6 d-flex flex-column">
          <LazyLoad height={200} offset={100}>
            <img
              src={web}
              className="img-fluid "
              style={{ maxWidth: "8rem" }}
            />
          </LazyLoad>
          <small className="fw-bold fs-6 ">Web Development</small>
        </div>
        <div className="col col-6 d-flex flex-column">
          <LazyLoad height={200} offset={100}>
            <img
              src={appD}
              className="img-fluid"
              style={{ maxWidth: "10rem" }}
            />
          </LazyLoad>
          <small className="fw-bold fs-6">App Development</small>
        </div>
      </div>
     
    </div>
  );
}

export default ServiceOffer;
