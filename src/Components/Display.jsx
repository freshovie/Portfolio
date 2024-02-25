import React from 'react';
import { Navbar, Footer }from "../Components";
import { Home, Client, Brands, Work, Plant, Smart, Logo, Aboutme } from "../Pages";
import { BrowserRouter, Routes } from 'react-router-dom';


const Display = () => {
  return (
    <>
    <div>
      <BrowserRouter>
       <Navbar />

      <Routes>
       <Home />
       <Client />
       <Brands />
       <Work />
       <Plant />
       <Smart />
       <Logo />
       <Aboutme />
      </Routes>
      
       <Footer />
      </BrowserRouter>
    </div>
    </>
  )
}

export default Display
