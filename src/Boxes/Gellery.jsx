import React, { useState } from 'react';
import './Gellery.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/Place';

const Gellery = () => {
  // State for menu and dropdown
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <>
      <nav className="Menu-bars">
        {/* Logo Section */}
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
              <a href="/Home">Home</a>
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
          <a href="#login">
            <button type="button">Login</button>
          </a>
        </div>
      </nav>

      {/* Icon Section */}
      <div className="icon-logo">
        <div className="gmail">
          <div className="gmail-icon">
            <MailOutlineIcon />
          </div>
          <a href="mailto:info@startupwebsupport.com">
            info@startupwebsupport.com
          </a>
        </div>

        <div className="Contact">
          <div className="cont-icon">
            <PhoneForwardedIcon />
          </div>
          <a href="tel:7479499718">7479499718</a>
        </div>

        <div className="complan">
          <div className="comp-icon">
            <BorderColorIcon />
          </div>
          <a href="#complain">Complain</a>
        </div>
      </div>

      <div className='Bottom_cont'>
         <div className='Bottom_menu'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Academics</a>
            <a href="">Events</a>
            <a href="">Gallery</a>
            <a href="">Contact Us</a>
            <a href="">Annual Calendar</a>
         </div>

         <div className='Botton_contact'>
            <a href="https://www.facebook.com/startupwebsupport"><FacebookIcon/></a>
            <a href="https://www.instagram.com/startup_web_support/?hl=en"><InstagramIcon/></a>
            <a href="https://www.linkedin.com/company/startupwebsupport/posts/?feedView=all"><LinkedInIcon/></a>
            <a href=""><TwitterIcon/></a>
            <a href="https://wa.me/7479499718?text=Hello%20How%20are%20You!"><WhatsAppIcon/></a>

         </div>

         <div className='Bottom_icon'>
              <div className='Bot_gmail'>
                  <div className='gmail'>
                   <MailOutlineIcon/>
                  </div>
                  <a href="">info@startupwebsupport.com</a>
               </div>

               <div className=' Botom_Contact'>
                  <div className='cont'>
                   <PhoneForwardedIcon/>
                  </div>
                  <a href="">7479499718</a>
               </div>

               <div className='Location'>
                  <div className='Locat'>
                     <PlaceIcon/>
                  </div>
                  <p>Patna Bihar</p>
                </div> 

         </div>
         
    </div>
    </>
  );
};

export default Gellery;
