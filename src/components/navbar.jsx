import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="content position-static">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid justify-content-center">
          <Link className="navbar-brand" to="/about" id="about">
            <button className="btn btn-info text-white">About</button>
          </Link>
          <Link className="navbar-brand" aria-current="page" to="/">
            <button className="btn btn-info text-white">Home</button>
          </Link>

          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
