import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Code-KB
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/html"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={() => setIsOpen(false)}
          >
            HTML
          </NavLink>
          <NavLink
            to="/css"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={() => setIsOpen(false)}
          >
            CSS
          </NavLink>
          <NavLink
            to="/javascript"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={() => setIsOpen(false)}
          >
            JavaScript
          </NavLink>
          <NavLink
            to="/react"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={() => setIsOpen(false)}
          >
            React
          </NavLink>
          <NavLink
            to="/material"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={() => setIsOpen(false)}
          >
            Material UI
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;