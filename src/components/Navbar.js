import React from "react";
import "../css/Grid.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-title">
        <a href={"/"} style={{ textDecoration: "none", color: "white" }}>
          Finkcraft
        </a>
      </div>
    </div>
  );
};

export default Navbar;
