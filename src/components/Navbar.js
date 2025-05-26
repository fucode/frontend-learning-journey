import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Home
      </NavLink>
      <NavLink
        to="/html"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        HTML
      </NavLink>
      <NavLink
        to="/css"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        CSS
      </NavLink>
      <NavLink
        to="/javascript"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        JavaScript
      </NavLink>
      <NavLink
        to="/react"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        React
      </NavLink>
    </nav>
  );
}

export default Navbar;
