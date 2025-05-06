import React from 'react'
import './Crausel.css'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import PlaceIcon from '@mui/icons-material/Place';



const Bottom = () => {
  return (
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
            <a href="https://www.facebook.com/profile.php?id=100089081652092"><FacebookIcon/></a>
            <a href="https://www.instagram.com/shivampathak8106/?hl=en"><InstagramIcon/></a>
            <a href="https://www.linkedin.com/in/shivam9076/"><LinkedInIcon/></a>
            <a href="https://x.com/ShivamPath93725"><TwitterIcon/></a>
            <a href="https://wa.me/9076985876?text=Hello%20How%20are%20You!"><WhatsAppIcon/></a>

         </div>

         <div className='Bottom_icon'>
              <div className='Bot_gmail'>
                  <div className='gmail'>
                   <MailOutlineIcon/>
                  </div>
                  <a href="">shivampathak99771@gmail.com</a>
               </div>

               <div className=' Botom_Contact'>
                  <div className='cont'>
                   <PhoneForwardedIcon/>
                  </div>
                  <a href="">9076985876</a>
               </div>

               <div className='Location'>
                  <div className='Locat'>
                     <PlaceIcon/>
                  </div>
                  <p>UP</p>
                </div> 

         </div>
         
    </div>
  )
}

export default Bottom
