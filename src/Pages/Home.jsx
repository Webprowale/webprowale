import React from "react";
import Biography from "../Components/Biography";
import SeeLatestWork from "../Components/SeeLatestWork";
import Title from "../Components/Title";
import SocialIcon from "../Components/SocialIcon";
import ServiceOffer from "../Components/ServiceOffer";
import Experience from "../Components/Experience";
import WorkWith from "../Components/WorkWith";
function Home() {
  return (
    <div className="container-fluid px-lg-5 py-3 mt-4">
      <div className=" row " style={{ gap: "20px" }}>
        <div className="col-lg d-flex flex-column align-items-lg-end align-items-center">
          <Biography />
          <div className="d-none d-lg-block p-0">
          <SeeLatestWork />
          </div>
        </div>
        <div className="col-lg d-flex flex-column ps-lg-0 ps-3 align-items-center">
          <div
            className="d-flex px-lg-0"
            style={{ gap: "1.2rem" }}
          >
            <Title />
            <SocialIcon />
          </div>
          <ServiceOffer />
          <div className="d-block d-lg-none p-0">
          <SeeLatestWork />
          </div>
        </div>
        <div className="col-lg d-flex flex-column align-items-lg-start align-items-center p-0">
          <Experience />
          <WorkWith />
        </div>
      </div>
    </div>

  );
}

export default Home;
