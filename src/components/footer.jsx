import React from "react";

const Footer = () => {
  return (
    <div className="col-md-5 p-lg-5 mx-auto mt-5 bg-info" id="header">
      <p className="fw-small text-center">
        Developed by Daniele Trovato at:<span> </span>
        <a href="https://github.com/dantrovato" className="text-danger">
          {" "}
          github.com/dantrovato
        </a>
      </p>
    </div>
  );
};

export default Footer;
