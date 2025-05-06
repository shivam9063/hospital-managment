import React from 'react';
import './Navbar.css'; 
import doctor_photo from '../../assets/doctor.jpg.png'
import Suadmin_photo from '../../assets/admin.jpg.jpg'
import admin_photo from '../../assets/admin-login.jpg.png'
import acc_photo from '../../assets/jpg.10.jpg'
import REC_photo from '../../assets/jpg.6.jpg'
import PHA_photo from '../../assets/jpg.9.jpg'
import PATH_photo from '../../assets/jpg.4.jpg'
import NURS_photo from '../../assets/jpg.8.jpg'
import PET_photo from '../../assets/jpg.7.jpg'


const Box = () => {
    return (
     <>
        <div className='Box' >
            <div className='BoxA'>
                <div className="Boxa">
                <img src={doctor_photo}/>
                   <h3>DOCTOR</h3>
                   <p>Handle patient treatment in OPD, IPD, and OT.</p>
                </div>
                <div className="Boxb"  >
                   <img src={Suadmin_photo}/>
                   <h3>SUPER ADMIN</h3>
                   <p>Gain complete control with all functionalities.</p>
                </div>
                 <div className="Boxc">
                   <img src={admin_photo}/>
                     <h3>ADMIN</h3>
                     <p>Oversee daily operations with nearly all features.</p>
                      
                  </div>
            </div>
            <div className='BoxB'>
                 <div className="Boxd">
                     <img src={acc_photo}/>
                     <h3>ACCOUNTANT</h3>
                     <p>Handle OPD, IPD, department billing, and payroll management.</p>
                  </div>
                 <div className="Boxe">
                    <img src={REC_photo}/>
                     <h3>RECEPTIONEST</h3>
                     <p>Oversee OPD bookings, visitors, mail, and complaints.</p>
                  </div>
                  <div className="Boxf">
                  <img src={PHA_photo}/>
                     <h3>PHARMACIST</h3>
                     <p>Handle pharmacy sales and medication inventory.</p>
                  </div>
            </div>
             
            <div className='BoxC'>
                <div className="Boxg">
                <img src={PATH_photo}/>
                   <h3>PATHOLOGIST</h3>
                   <p>Oversee pathology tests and report management.</p>
                </div>
                <div className="Boxh">
                  <img src={NURS_photo}/>
                   <h3>NURSE</h3>
                   <p>Administer patient care in OPD, IPD, and OT.</p>
                </div>
                <div className="Boxi">
                  <img src={PET_photo}/>
                   <h3>PATIENT</h3>
                   <p>Monitor OPD appointments, visits, and IPD treatments.</p>
                </div>
            </div> 
        </div>
        
      </>
    );
};

export default Box;
