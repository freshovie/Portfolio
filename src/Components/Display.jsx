import React from 'react';
import { Navbar, Footer }from "../Components";
import { Home, Client, Brands, Work } from "../Pages";


const Display = () => {
  return (
    <div>
       <Navbar />
       <Home />
       <Client />
       <Brands />
       <Work />
       <Footer />
    </div>
  )
}

export default Display
