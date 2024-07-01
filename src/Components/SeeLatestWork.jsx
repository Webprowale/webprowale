import React from "react";
import web from "../Images/web1.png";
import { Link } from "react-router-dom";
function SeeLatestWork() {
  return (
    <div className="rounded shadow px-3 pt-2 d-flex flex-column  mt-2 con1">
      <div className="mx-auto mt-1">
        <h6 className="fs-4 fw-bold">See My</h6>
        <h5 className="fs-5 fw-bold ms-4 ">Latest Work</h5>
      </div>
      <div className="d-flex flex-column">
        <div className="rounded shadow p-2">
          <Link target="_blank" to="https://robonymous.netlify.app/">
            <div className="d-flex align-items-end justify-content-end">
              <Link target="_blank" to="https://robonymous.netlify.app/">
                <i class="fas fa-external-link-alt"></i>
              </Link>
            </div>
            <h5 className="fw-bold fs-6">Robonymous</h5>
            <p>
              Robonymous is an interactive anonymous messaging platform with a
              dare game.
            </p>
          </Link>
        </div>
        <div className="rounded shadow p-2">
          <Link target="_blank" to="https://writereadme.netlify.app/">
            <div className="d-flex align-items-end justify-content-end">
              <Link target="_blank" to="https://writereadme.netlify.app/">
                <i class="fas fa-external-link-alt"></i>
              </Link>
            </div>
            <h5 className="fw-bold fs-6">WriteReadme</h5>
            <p>
              A platform that generate a readme file for you by choosing a
              pre-made template to start.
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
