import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Heading from './Components/Navbar/Heading';
import Box from './Components/Navbar/Box';
import Button from './Components/Navbar/Button';



const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Heading />
      <Box/>
      <Button/>
    </div>
  );
};

export default App;
