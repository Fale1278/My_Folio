import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          King
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