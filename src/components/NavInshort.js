import React from "react";
import "./NavInshort.css";
import HamburgerDrawer from "./HamburgerDrawer";

const NavInshort = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        <HamburgerDrawer setCategory={setCategory} />
      </div>

      <img
        style={{ cursor: "pointer" }}
        src="https://inshorts.com/dist/images/home_page/logo.png "
        height="80%"
        alt="logo"
      />
    </div>
  );
};

export default NavInshort;
