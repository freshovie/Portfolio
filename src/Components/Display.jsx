import React from 'react';
import { Navbar, Footer }from "../Components";
import { Home, Client, Brands, Work, Plant, Smart, Logo, Aboutme } from "../Pages";


const Display = () => {
  return (
    <>
    <div>
     
       <Navbar />
       
       <Home />
       <Client />
       <Brands />
       <Work />
       <Plant />
       <Smart />
       <Logo />
       <Aboutme />
       <Footer />
    </div>
    </>
  )
}

export default Display
