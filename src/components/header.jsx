import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <div className="col-md-5 p-lg-5 mx-auto mb-5 bg-info" id="header">
        <h1 className="display-4 fw-normal text-center">Fair Share</h1>
        <p className="lead fw-normal text-center">
          The help you need to decide who should pay what
        </p>
      </div>
    );
  }
}

export default Header;
