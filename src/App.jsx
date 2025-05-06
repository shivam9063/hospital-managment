import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Heading from './Components/Navbar/Heading';
import Box from './Components/Navbar/Box';
import Button from './Components/Navbar/Button';
import Login from './Components/Login';
import Patlogin from './Components/patlogin'; 
import Menu from './Front/Menu'; 
import Contact from './Front/Contact'; 
import MenuBox from './Front/MenuBox'; // Keep this import
import AboutMenuBox from './Front/AboutMe';
import Features from './Front/Feature'; 
import Bottom from './Front/Bottom'; 
import Gellery from './Boxes/Gellery';


 // Rename this import

const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Navbar />
              <Heading />
              <Box />
              <Button />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/patlogin" element={<Patlogin />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu-box" element={<MenuBox />} />
        <Route path="/about" element={<AboutMenuBox />} /> {/* Use the renamed import */}
        <Route path="/gellery" element={<Gellery />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
