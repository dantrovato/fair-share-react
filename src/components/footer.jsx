import React from "react";

const Footer = () => {
  return (
    <div className="col-md-5 p-lg-5 mx-auto mt-5 bg-info" id="header">
      <p className="fw-small text-center">
        Developed by Daniele Trovato. Repo at:<span> </span>
        <a
          href="https://github.com/dantrovato/fair-share-react"
          className="text-danger"
        >
          {" "}
          github
        </a>
      </p>
    </div>
  );
};

export default Footer;
