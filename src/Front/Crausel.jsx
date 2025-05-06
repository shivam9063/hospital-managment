import React, { useState, useEffect } from "react";
import bg1 from '../assets/Shivam1.jpg';
import bg2 from '../assets/Shivam2.jpg';
import bg3 from '../assets/Shivam3.jpg';
import bg4 from '../assets/Shivam4.jpg';
import bg5 from '../assets/Shivam5.jpg';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import './Crausel.css'; // Assuming the CSS file name remains as 'Crausel.css'

function Crausel() { // Ensure the component name matches the export name
  const images = [bg1, bg2, bg3, bg4, bg5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Move to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Move to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide logic with hover pause
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        handleNext();
      }, 2000); // Auto-slide every 2 seconds
      return () => clearInterval(interval); // Cleanup interval on unmount or hover
    }
  }, [isHovered]);

  return (
    <div
      className="slider-container"
      onMouseEnter={() => setIsHovered(true)} // Pause auto-slide on hover
      onMouseLeave={() => setIsHovered(false)} // Resume auto-slide on leave
    >
      {/* Slider Images */}
      <div className="slider-image">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`} // Fixed string interpolation syntax
          className="slider-img"
        />
      </div>

      {/* Navigation Icons */}
      <div className="slider-icons">
        <div className="icon-img" onClick={handlePrev}>
          <KeyboardArrowLeftIcon />
        </div>
        <div className="icon-img" onClick={handleNext}>
          <KeyboardArrowRightIcon />
        </div>
      </div>
    </div>
  );
}

export default Crausel; // Ensure the export name matches the component name
