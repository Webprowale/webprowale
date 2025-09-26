import React, { useState } from "react";
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
import ChatBot from "../Components/ChatBot";
function Home() {
  const [showAgent, setShowAgent] = useState(false);
  return (
    <div className="container-fluid px-lg-5 pt-5 relative-position">
      <div className=" row px-auto " style={{ gap: "20px" }}>
        <div className="col-lg d-flex flex-column ">
          <Biography />
          <div className="d-none d-lg-block p-0">
            <SeeLatestWork />
          </div>
        </div>
        <div className="col-lg">
          <div className="row mb-3">
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
      {!showAgent && (
        <button
          className="btn btn1 primaryBg fw-bold text-white "
          style={{
            position: "fixed",
            right: "20px",
            bottom: "80px",
            zIndex: 9999,
            padding: "12px 20px",
            width: "180px",
          }}
          onClick={() => setShowAgent(!showAgent)}
        >
          Talk to Agent
        </button>
      )}
      {showAgent && (
        <div
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
            zIndex: 9999,
          }}
        >
          <ChatBot onClose={() => setShowAgent(false)} />
        </div>
      )}
    </div>
  );
}

export default Home;
