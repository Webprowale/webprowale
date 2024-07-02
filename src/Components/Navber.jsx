import React from "react";
import { Link } from "react-router-dom";
function Navber() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-white rounded shadow px-md-5">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3 fw-bold" to='/'>
          Web<span className="primaryColor">pro</span>wale
        </Link>

        </div>
    </nav>
  );
}
export default Navber;
