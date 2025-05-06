import React from 'react';
import './Crausel.css';
import About_img from '../assets/about.jpg';
import { dialogClasses } from '@mui/material';

const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={About_img} alt="About Us" />
        </div>
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p className="subtitles">What we are and our history</p>
            <p className="descriptions">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="mission-text">
            <h2>Vision & Mission</h2>
            <p className="subtitles">Our goal and thoughts</p>
            <p className="descriptions">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
