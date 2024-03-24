import React from "react";
import web from "../Images/web1.png";
import { Link } from "react-router-dom";
function SeeLatestWork() {
  return (
    <div className="rounded shadow px-3 pt-2 d-flex flex-column mt-3 pb-2 con1">
      <div className="mx-auto mt-3">
        <h6 className="fs-6 fw-semibold">See My</h6>
        <h5 className="fs-6 fw-bold ms-4 mb-3">Latest Work</h5>
      </div>
      <div className="d-flex flex-column">
        <div className="rounded shadow p-2">
          <div className="d-flex align-items-end justify-content-end">
            <Link target="_blank" to='https://robonymous.netlify.app/'>
              <i class="fas fa-external-link-alt"></i>
            </Link>
          </div>
          <h5 className="fw-bold fs-6">Robonymous</h5>
          <p>
            Robonymous is an interactive anonymous messaging platform with a
            dare game.
          </p>
        </div>
        <div className="rounded shadow p-2">
          <div className="d-flex align-items-end justify-content-end">
            <Link target="_blank" to='https://writereadme.netlify.app/'>
              <i class="fas fa-external-link-alt"></i>
            </Link>
          </div>
          <h5 className="fw-bold fs-6">WriteReadme</h5>
          <p>
            A platform that generate a readme file for you by choosing a pre-made template to start.
          </p>
        </div>
      </div>
      <p className="fw-semibold mt-4">All project <span><Link target="_blank" to='https://github.com/Webprowale'><i class="fas fa-external-link-alt"></i></Link></span></p>
    </div>
  );
}

export default SeeLatestWork;
