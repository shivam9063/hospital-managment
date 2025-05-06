import React from 'react';
import './Crausel.css'; 
import rahul from '../assets/rahul1.jpg';
import rohit from '../assets/rohit1.jpg';
import vikash from '../assets/vickash.jpg';
import vicky from '../assets/vicky.jpg';

const Doctor = () => {
  return (
      <>
            <div className='Feature-head'>
              <h1>Our Doctors</h1>
            </div>
      
            <div className='Feature_boxs'>
      
              <div className='Feature_boxs1'>
                 <img src={rahul}/>
                 <h3>Marc Parcival</h3>
                 <p>Professor</p>
              </div>
      
              <div className='Feature_boxs1'>
                 <img src={rohit}/>
                 <h3>Marc Parcival</h3>
                 <p>Professor</p>
              </div>
      
              <div className='Feature_boxs1'>
                 <img src={vikash} />
                 <h3>Marc Parcival</h3>
                 <p>Professor</p>
              </div>
      
              <div className='Feature_boxs1'>
                <img src={vicky}/>
                <h3>Marc Parcival</h3>
                <p>Professor</p>
              </div>
            </div>
          </>
  )
}

export default Doctor