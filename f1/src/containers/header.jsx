import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = ({ year }) => {
  return (
    <header className="header">
      <span className="f1-logo">F1 App </span>
      <Link className="header-btn" to="/">Home</Link>
      <Link className="header-btn" to="/current/races">{year} Season</Link>
      <Link className="header-btn" to="/seasons">Previous Seasons</Link>
    </header>
  );
};

export default Header;
