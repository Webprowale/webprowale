import React from "react";

function WorkWith() {
  const handlemail = ()=>{
    window.location.href = 'mailto:webprowale@gmail.com';
  }
  const handlephone = ()=>{
    window.location.href = 'tel:+2349035874126';
  }
  const handleChat = () => {
    window.open('https://wa.me/2349035874126', '_blank');
  };
  
  return (
    <div className="rounded mt-3 shadow px-4 py-3 d-flex flex-column con1" >
      <h4 className="fw-bold fs-5 mt-3">Work With</h4>
      <h3 className="fw-bold fs-4 ms-4 ">Webprowale 0n ...!</h3>
      <h3 className="fw-bold fs-6 ms-5">By Contacting Me</h3>
        <ul className="d-flex p-0 mt-4 mb-0" onClick={handlemail}>
        <li className="fw-bold">Email:</li>
        <p className="fw-semibold ms-1">webprowale@gmail.com</p>
        </ul>
        <ul className="d-flex p-0" onClick={handlephone}>
        <li className="fw-bold">Phone:</li>
        <p className="fw-semibold">+2349035874126</p>
        </ul>
      <button className="btn btn1 primaryBg fw-bold text-white mt-2" onClick={handleChat}>Let's Chat</button>
    </div>
  );
}

export default WorkWith;
