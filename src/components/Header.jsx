import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/home" className="headhome">
        Home
      </Link>
      <Link to="/" className="logout">
        Log Out
      </Link>
      <Link to="/range" className="range">
        Range
      </Link>
      <Link to="/armory" className="range">
        Armory
      </Link>
    </div>
  );
};

export default Header;
