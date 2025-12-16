import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          KNF {/* Signature Logo */}
        </NavLink>
        
        {/* Hamburger Menu Button */}
        <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <div className={`menu-bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`menu-bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`menu-bar ${isOpen ? 'open' : ''}`}></div>
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;