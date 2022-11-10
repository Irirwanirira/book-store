import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="left">
        <h1> Bookstore </h1>
        <div className="link">
          <Link to="/">Book</Link>
          <Link to="/Category">Category</Link>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default NavBar;
