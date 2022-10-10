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
    </div>
  );
};

export default Header;