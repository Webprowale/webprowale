import React from "react";
import web from "../Images/web1.png";
import { Link } from "react-router-dom";
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
function SeeLatestWork() {
  const con = useRef(null);
  useGSAP(()=>{
    gsap.from(con.current, {
      duration:3.5,
      ease: "bounce.out",
      y: 200
      });
  })
  return (
    <div className="rounded shadow px-3 pt-2 d-flex flex-column  mt-2 con1" ref={con}>
      <div className="mx-auto mt-1">
        <h6 className="fs-4 fw-bold">See My</h6>
        <h5 className="fs-5 fw-bold ms-4 ">Latest Work</h5>
      </div>
      <div className="d-flex flex-column">
        <div className="rounded shadow p-2">
          <Link target="_blank" to="https://nymous-app.netlify.app/">
            <div className="d-flex align-items-end justify-content-end">
              <Link target="_blank" to="https://nymous-app.netlify.app/">
                <i class="fas fa-external-link-alt"></i>
              </Link>
            </div>
            <h5 className="fw-bold fs-6">Nymous</h5>
            <p>
              Nymous is an interactive anonymous messaging platform with a
              dare game.
            </p>
          </Link>
        </div>
         <div className="rounded shadow p-2">
          <Link target="_blank" to="https://pikup-control.vercel.app/">
            <div className="d-flex align-items-end justify-content-end">
              <Link target="_blank" to="https://pikup-control.vercel.app/">
                <i class="fas fa-external-link-alt"></i>
              </Link>
            </div>
            <h5 className="fw-bold fs-6">pikup admin</h5>
            <p>
              A fully admin webiste with nextjs, to see all the activities going on their app
            </p>
          </Link>
        </div>
        <div className="rounded shadow p-2">
          <Link target="_blank" to="https://pikup-six.vercel.app/">
            <div className="d-flex align-items-end justify-content-end">
              <Link target="_blank" to="https://pikup-six.vercel.app/">
                <i class="fas fa-external-link-alt"></i>
              </Link>
            </div>
            <h5 className="fw-bold fs-6">Pikup Website</h5>
            <p>
              Pikup webiste for recieve waitlist
            </p>
          </Link>
        </div>
        <div className="rounded shadow p-2">
          <Link target="_blank" to="https://dancefitltd.co.uk/">
            <div className="d-flex align-items-end justify-content-end">
              <Link target="_blank" to="https://dancefitltd.co.uk/">
                <i class="fas fa-external-link-alt"></i>
              </Link>
            </div>
            <h5 className="fw-bold fs-6">Dancefitltd</h5>
            <p>
              A platform that offer dancing class as service for people 
            </p>
          </Link>
        </div>
      </div>
      <div className="rounded shadow p-2">
          <Link target="_blank" to="https://losungconsult.com/">
            <div className="d-flex align-items-end justify-content-end">
              <Link target="_blank" to="https://losungconsult.com/">
                <i class="fas fa-external-link-alt"></i>
              </Link>
            </div>
            <h5 className="fw-bold fs-6">Losung</h5>
            <p>
              A consultant company to display their services
            </p>
          </Link>
        </div>
        <div className="rounded shadow p-2">
          <Link target="_blank" to="https://neyooandteetech.com/">
            <div className="d-flex align-items-end justify-content-end">
              <Link target="_blank" to="https://neyooandteetech.com/">
                <i class="fas fa-external-link-alt"></i>
              </Link>
            </div>
            <h5 className="fw-bold fs-6">Neyo & Tee Tech</h5>
            <p>
              A Company website that offer cctv camera as services
            </p>
          </Link>
        </div>
      <p className="fw-semibold mt-2">
        All project{" "}
        <span>
          <Link target="_blank" to="https://github.com/Webprowale">
            <i class="fas fa-external-link-alt"></i>
          </Link>
        </span>
      </p>
    </div>
  );
}

export default SeeLatestWork;
