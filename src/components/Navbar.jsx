import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../public/images/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} className="logo"/>
          <h1 className="title-logo">Délices Culinaires</h1>
        </Link>

        <nav className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <button className="btn">Mes recettes</button>
        </nav>

        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;