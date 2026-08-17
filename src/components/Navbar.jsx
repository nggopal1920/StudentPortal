import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // Menu kholne aur band karne ke liye state
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-top">
        <h2 id="logo">StudentPortal</h2>
        
        {/* Mobile ke liye Three Lines (Hamburger) Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </div>

      {/* Menu items aur search bar (Phone par yeh toggle honge) */}
      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li className="menu">Home</li>
        <li className="menu">Notes</li>
        <li className="menu">Placement</li>
        <li className="menu">Login</li>
        
        <div className="search-box">
          <input type="search" placeholder="Search..." id="search" />
          <button id="button">Search</button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;