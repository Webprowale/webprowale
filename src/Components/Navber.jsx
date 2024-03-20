import React from "react";
import { Link } from "react-router-dom";
function Navber() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-white rounded shadow px-md-5">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3 fw-bold" to='/'>
          Web<span className="primaryColor">pro</span>wale
        </Link>
        <button
          className="navbar-toggler d-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" d-none d-lg-block collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='/'>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Project</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Contact</Link>
            </li>
          </ul>
          <Link className="primaryBg  rounded outline-0 px-4 py-2 text-white fw-bold border-0" target='_blank' to='https://www.linkedin.com/in/webprowale-akinwale'>
            Let's talk
          </Link>
        </div>
        <button
          className=" d-lg-none border-0 outline-0 p-0 me-2 "
          type="button"
          style={{backgroundColor:"transparent"}}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasLeft"
          aria-controls="offcanvasLeft"
        >
        <i className="fa-solid fa-bars fs-2 primaryColor"></i>
        </button>

        <div
          className="offcanvas offcanvas-end d-lg-none"
          tabIndex="-1"
          id="offcanvasLeft"
          aria-labelledby="offcanvasLeftLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasLeftLabel">
              <Link className="navbar-brand fs-3 fw-bold" to='/'>
                Web<span className="primaryColor">pro</span>wale
              </Link>
            </h5>
            <button
              type="button"
              className="fa-solid fa-xmark outline-0 border-0 primaryColor fs-3"
              style={{backgroundColor:"transparent"}}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-flex flex-column">
            <ul className="px-3 mb-0">
            <li className="nav-item mb-2">
              <Link className="nav-link" aria-current="page" to='/'>
                Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link" to='/about'>
                About
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link">Project</Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link">Contact</Link>
            </li>
            </ul>
            <Link className="primaryBg -ms-2  rounded outline-0 px-2 py-2 text-white fw-bold border-0" target='_blank' to='https://www.linkedin.com/in/webprowale-akinwale'>
              Let's talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navber;
