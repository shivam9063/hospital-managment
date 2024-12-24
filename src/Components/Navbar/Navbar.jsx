import React from 'react';
import './Navbar.css'; // Correct relative path to the CSS file
import logo_light from '../../assets/logo.jpg'

const Navbar = () => {
  return (
    <>
   <div className="Navbar">
      <a href="" className="logo"><span>envato</span>market</a>
      <a href=""><button>Buy Now</button></a>
   </div>
    </>
  );
};

export default Navbar;
