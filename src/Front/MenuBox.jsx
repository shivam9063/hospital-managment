import React from 'react';
import './Crausel.css';

const MenuBox = () => {
  return (
    <div className='menu-container'>
      <div className='service-box'>
        <h1>Clinic News</h1>
        <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed</p>
        <button>Read More</button>
      </div>
      <div className='service-box'>
        <h1>Top Doctors</h1>
        <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed</p>
        <button>Read More</button>
      </div>
      <div className='service-box'>
        <h1>24 Hours Service</h1>
        <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed</p>
        <button>Read More</button>
      </div>
      <div className='service-box'>
        <h1>Opening Hours</h1>
        <p>
          <strong>Monday - Friday:</strong> 8.00 - 17.00<br />
          <strong>Saturday:</strong> 9.30 - 17.30<br />
          <strong>Sunday:</strong> 9.30 - 15.00
        </p>
      </div>
    </div>
  );
};

export default MenuBox;
