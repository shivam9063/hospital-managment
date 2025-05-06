import React from 'react'
import './Crausel.css';
import ambulance from '../assets/ambulance.jpg.jpg';
import doctoricon from '../assets/doctorsicon.jpg.jpg';
import medicine from '../assets/medicine.jpg.png';
import scientist from '../assets/scientist.jpg.png';

const Feature = () => {
  return (
    <>
      <div className='Feature-head'>
        <h1>Specialized Services</h1>
        <p>Our services encompass diverse medical specialties.</p>
      </div>

      <div className='Feature_box'>

        <div className='Feature_box1'>
          <img src={medicine}/>
          <h3>Medical Care</h3>
          <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique</p>
        </div>

        <div className='Feature_box1'>
          <img src={ambulance}/>
          <h3>Urgent Care</h3>
          <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique</p>
        </div>

        <div className='Feature_box1'>
          <img src={doctoricon}/>
          <h3>Certified Doctors</h3>
          <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique</p>
        </div>

        <div className='Feature_box1'>
          <img src = {scientist}/>
          <h3>Medical Experts</h3>
          <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique</p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Feature