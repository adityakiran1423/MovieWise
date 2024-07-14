import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#recommendations">Recommendations</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;