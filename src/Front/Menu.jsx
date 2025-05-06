import React, { useState } from 'react';
import './Menu.css';
import Contact from './Contact';
import Crausel from './Crausel';
import MenuBox from './MenuBox';
import AboutMe from './AboutMe';
import Feature from './Feature';
import Doctor from './Doctor';
import Bottom from './Bottom';


const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <>
      <nav className="Menu-bars">
        <div className="ComLogo">
          <h2>
            <span>S</span>tartup
            <span>W</span>eb
            <span>S</span>upport
          </h2>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span>{menuOpen ? '✖' : '☰'}</span>
        </div>

        {/* Menu Links */}
        <div className={`menu-link ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="">Annual Calendar</a>
            </li>
            <li>
              <a href="">Appointment</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li
              className="dropdown"
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
            >
              <a href="#" className="dropdown-toggle">
                About Us
              </a>
              {aboutDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="">About Hospital</a>
                  </li>
                  <li>
                    <a href="">Vision and Mission</a>
                  </li>
                  <li>
                    <a href="">Meet Our Doctor</a>
                  </li>
                  <li>
                    <a href="">FAQ's</a>
                  </li>
                  <li>
                    <a href="">Department</a>
                  </li>
                  <li>
                    <a href="">Testimonials</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/gellery">Gallery</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Login Button */}
        <div className="Login-US">
          <a href="">
            <button type="button">Login</button>
          </a>
        </div>
      </nav>
     <Contact/>
     <Crausel/>
     <MenuBox/>
     <AboutMe/>
     <Feature/>
     <Doctor/>
     <Bottom/>
    </>
  );
};

export default Menu;
