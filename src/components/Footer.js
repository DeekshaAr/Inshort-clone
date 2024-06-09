import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone by -{" "}
        <a href="www.linkedin.com/in/deeksha-arora-3b1134231" target="">
          Deeksha Arora
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="www.linkedin.com/in/deeksha-arora-3b1134231">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
