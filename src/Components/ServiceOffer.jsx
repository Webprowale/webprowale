import React from "react";
import web from '../Images/web1.png'
import appD from "../Images/app.png"
import graphic from '../Images/graphics.png'
import seo from '../Images/seo.png'
function ServiceOffer() {
  return (
    <div
      className="rounded mt-3 shadow px-3 py-3 d-flex flex-column con1"
    >
      <h4 className="fs-2 fw-bold mb-3 ">Service Offer</h4>
      <div className="row" style={{justifyContent:"space-evenly"}}>
        <div className="col col-6 d-flex flex-column pt-2 ">
          <img src={graphic} className='img-fluid' />
          <small className="fw-bold ms-4 fs-6">Graphic Design</small>
        </div>
        <div className="col col-6 d-flex flex-column">
          <img src={seo} className='img-fluid' />
          <small className="fw-bold fs-6">SEO Optimization</small>
        </div>
        <div className="col col-6 d-flex flex-column">
          <img src={web} className='img-fluid '  style={{maxWidth: "8rem"}} />
          <small className="fw-bold fs-6 ">Web Development</small>
        </div>
        <div className="col col-6 d-flex flex-column">
          <img src={appD} className='img-fluid' style={{maxWidth: "10rem"}}/>
          <small className="fw-bold fs-6">App Development</small>
        </div>
      </div>
      {/* <div className="d-flex mt-3">
      <h2 className="fs-3 text-black fw-semibold mt-3">Things I'm good at</h2>
      <i class="far fa-thumbs-up primaryColor ms-2 " style={{fontSize:'4rem'}}></i>
      </div> */}
    </div>
  );
}

export default ServiceOffer;
