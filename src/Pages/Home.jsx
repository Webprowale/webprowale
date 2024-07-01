import React from "react";
import Biography from "../Components/Biography";
import SeeLatestWork from "../Components/SeeLatestWork";
import Title from "../Components/Title";
import SocialIcon from "../Components/SocialIcon";
import ServiceOffer from "../Components/ServiceOffer";
import Experience from "../Components/Experience";
import WorkWith from "../Components/WorkWith";
import SkillTools from "../Components/SkillTools";
import Footer from "../Components/Footer";
import UseLayout from "../Components/UseLayout";
function Home() {
  return (
    <div className="container-fluid px-lg-5 pt-5">
      <div className=" row px-auto " style={{ gap: "20px" }}>
        <div className="col-lg d-flex flex-column ">
          <Biography />
          <div className="d-none d-lg-block p-0" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
          <SeeLatestWork />
          </div>
        </div>
        <div className="col-lg">
          <div
            className="row mb-3"
          >
            <div className="col-6">
            <Title />
            </div>
            <div className="col-6">
            <SocialIcon />
            </div>
          </div>
          <div className="d-lg-none">
          <SkillTools />
          </div>
          <div className="d-none d-lg-block">
          <Experience />
          </div>
          <ServiceOffer />
          <div className="d-block d-lg-none p-0">
          <SeeLatestWork />
          </div>
        </div>
        <div className="col-lg d-flex flex-column  px-2 ">
          <div className="d-none d-lg-block mb-4">
        <SkillTools />
        </div>
        <div className="d-lg-none">
        <Experience />
        </div>
          <WorkWith />
        </div>
      </div>
    </div>

  );
}

export default Home;
