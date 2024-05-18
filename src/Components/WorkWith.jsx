import React from "react";

function WorkWith() {
  const handleClick = ()=>{
    window.location.href = 'mailto:webprowale@gmail.com';
  }
  return (
    <div className="rounded mt-3 shadow px-4 py-3 d-flex flex-column con1" data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom">
      <h4 className="fw-bold fs-5 mt-3">Work With</h4>
      <h3 className="fw-bold fs-4 ms-4 ">Webprowale 0n ...!</h3>
      <h3 className="fw-bold fs-6 ms-5">By Contacting Me</h3>
      <button className="btn btn1 primaryBg fw-bold text-white mt-2" onClick={handleClick}>Let's Talk</button>
    </div>
  );
}

export default WorkWith;
