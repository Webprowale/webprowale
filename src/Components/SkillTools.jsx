import React from "react";

function SkillTools() {
  return (
    <div className="rounded shadow px-4 pt-2 d-flex flex-column con1 mt-2" data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom">
      <h4 className="mt-3 fs-5 fw-bold">My contributions</h4>
      <p className="text-start">
        As a Full-stack Web Developer, I excel in harmonizing captivating
        front-end design with powerful back-end development to craft seamless
        digital solutions. Whether you're a burgeoning startup poised for
        success or a distinguished brand aiming to enhance your online
        footprint, I'm dedicated to transforming your concept into a tangible
        masterpiece.</p>
        <p className="fs-6 fw-semibold">My toolkit includes</p>
        <div className="row">
          <h6 className="col-4 btn shadow primaryColor">HTML</h6>
          <h6 className="col-4 btn shadow primaryColor">CSS</h6>
          <h6 className="col-4 btn shadow primaryColor">Bootstrap</h6>
          <h6 className="col-4 btn shadow primaryColor">JavaScript</h6>
          <h6 className="col-4 btn shadow primaryColor"> React</h6>
          <h6 className="col-4 btn shadow primaryColor">React Native</h6>
          <h6 className="col-4 btn shadow primaryColor">PHP</h6>
          <h6 className="col-4 btn shadow primaryColor">MySQL</h6>
          <h6 className="col-4 btn shadow primaryColor">Git</h6>
          <h6 className="col-4 btn shadow primaryColor">GitHub</h6>
        </div>
        <div className="mx-auto shadow rounded mb-3">
        <marquee>Ensuring A Dynamic And Efficient Approach To Every Project.</marquee>
      </div>
    </div>
  );
}

export default SkillTools;
