import React from "react";
import { Route } from "react-router-dom";
import About from "./about";
import Home from "./home";

const Navbar = () => {
  return (
    <div className="content">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/about" id="about">
            About
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li> */}
              {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      {/* <Route path="/about" component={About} /> */}
      {/* <Route path="/" exact component={Home} /> */}
    </div>
  );
};

export default Navbar;
