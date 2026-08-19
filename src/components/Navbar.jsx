import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-top">
        <h2 id="logo">MG Portal</h2>
        
        {/* Mobile ke liye Three Lines (Hamburger) Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </div>

      {/* Menu items */}
      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li className="menu"><Link to="/Gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
        <li className="menu"><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li className="menu"><Link to="/notes" onClick={() => setIsOpen(false)}>Notes</Link></li>
        <li className="menu"><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
