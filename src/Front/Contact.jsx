import React from 'react'
import './Menu.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const Contact = () => {
  return (
       <>
           <div className='icon-logo'>
               <div className='gmail'>
                  <div className='gmail-icon'>
                   <MailOutlineIcon/>
                  </div>
                  <a href="">shivampathak99771@gmail.com.com</a>
               </div>

               <div className='Contact'>
                  <div className='cont-icon'>
                   <PhoneForwardedIcon/>
                  </div>
                  <a href="">9076985876</a>
               </div>

               <div className='complan'>
                  <div className='comp-icon'>
                   <BorderColorIcon/>
                  </div>
                  <a href="">Complain</a>
               </div>

           </div>
       </>
  );
}

export default Contact
