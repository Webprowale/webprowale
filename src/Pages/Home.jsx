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
import Testimonials from "../Components/Testimonials";
import ContactForm from "../Components/ContactForm";
// import Newsletter from "../Components/Newsletter";
import MetaTags from "../Components/MetaTags";
import { DotLottiePlayer } from "@dotlottie/react-player";

function Home() {
  const [showAgent, setShowAgent] = useState(false);
  return (
    <>
      <MetaTags 
        title="Joshua Akinwale - Full Stack Software Engineer | Webprowale"
        description="Experienced Full Stack Developer specializing in Laravel, React, Next.js, Python, and AI integration. Building scalable web applications and innovative solutions."
        url="https://webprowale.com"
      />
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
           <div className="row mt-4 px-2">
        <div className="col-12">
          <Testimonials />
        </div>
      </div>
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
          {/* <ContactForm /> */}
          {/* <Newsletter /> */}


        </div>
      </div>

      {/* New Sections */}
      {/* <div className="row mt-4 px-2">
        <div className="col-12">
          <Testimonials />
        </div>
      </div> */}

      
      
      

      {!showAgent && (
        // <button
        //   className="btn btn1 primaryBg fw-bold text-white "
        //   style={{
        //     position: "fixed",
        //     right: "20px",
        //     bottom: "80px",
        //     zIndex: 9999,
        //     padding: "12px 20px",
        //     width: "180px",
        //   }}
        //   onClick={() => setShowAgent(!showAgent)}
        // >
        //   Talk to Agent
        // </button>
        <DotLottiePlayer
          src="/chatbot-for -webprowale (1).lottie"
          loop
          autoplay
          style={{
            position: "fixed",
            right: "20px",
            bottom: "80px",
            zIndex: 9999,
            padding: "12px 20px",
            width: "250px",
          }}
        />
      )}
     
      </div>
    </>
  );
}

export default Home;
