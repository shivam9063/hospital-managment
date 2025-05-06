import React from 'react'
import './Login.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
       <>
          <div className='Login-Box'>
              <div className="boxl">
                <h3>SMART HOSPITAL</h3>
              </div>
              <span><hr /></span>
              <form action="">
                 <h2>Admin Login</h2>
                 <div className='Ema'>
                      <label htmlFor="Email"></label>
                      <input type="text" placeholder='Enter email ' required />
                      <label htmlFor="Password"></label>
                      <input type="password" placeholder='Enter password' required />
                 </div>
                 <div class="wrap">
                    <button type="submit">Submit</button>
                 </div>
              </form>
              <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-danger">Super Admin</button>
                    <button type="button" class="btn btn-warning">Admin</button>
                    <button type="button" class="btn btn-success">Doctor</button>
              </div>
              <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-danger">Pharmacist</button>
                    <button type="button" class="btn btn-warning">Pathologist</button>
                    <button type="button" class="btn btn-success">Radiologist</button>
              </div>
              <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-danger">Accountant</button>
                    <button type="button" class="btn btn-warning">Receptionist</button>
                    <button type="button" class="btn btn-success">Nurse</button>
              </div>
              <div className='UserSh'>
                  <div className='Forget'>
                    <a href="">Forget Password</a>
                  </div>
                  <div className='User'>
                    <a href="">User Login</a>
                  </div>
               </div> 

            </div>

            <div className='Shivam'>
              <h2>What's new in Tapashya Network of Medical Care (TNMC)</h2>
              <div className='Scroll-1'>
                 <h3>Clever Clinic Guide to Try 3D Tracking</h3>
                 <p>Clever Medical Center Leads in Globe to Apply 3D Tracking for Precise Spine... </p>
                 <a href="">Read More</a>
              </div>
              <span><hr /></span>

              <div className='Scroll-1'>
                 <h3>Meeting Plan for declined applicants for the role of Asstt. Lecturer.</h3>
                 <p>Interview Agenda for declined applicants for the role of Asstt. Professor in diverse subjects.</p>
                 <a href="">Read More</a>
              </div>
              <span><hr /></span>

              <div className='Scroll-1'>
                 <h3>The BioHealth Molecule Seminar</h3>
                 <p>The BioMedi Molecule Forum & Link unites leaders to explore ongoing advances,... </p>
                 <a href="">Read More</a>
              </div>
              <span><hr /></span>

              <div className='Scroll-1'>
                 <h3>Clear Sight Month 2025: Redefine Your Tomorrow</h3>
                 <p>Clear Sight Month 2025 motivates all to take preventive measures in eye health and assist those... </p>
                 <a href="">Read More</a>
              </div>
              <span><hr /></span>

              <div className='Scroll-1'>
                 <h3>Ensuring infants and kids stay safe in intense heatwave conditions.</h3>
                 <p>As intense heat persists this week in our area, it is vital to watch over your children. </p>
                 <a href="">Read More</a>
              </div>
              <span><hr /></span> 

            </div>
        </>  
    );
}

export default Login
