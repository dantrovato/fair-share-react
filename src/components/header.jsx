import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 fw-normal text-center">Fair Share</h1>
        <p className="lead fw-normal text-center">
          To help you decide who should pay what
        </p>
      </div>
    );
  }
}

export default Header;
