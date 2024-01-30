import React from 'react';
import { Airbnb, Google, Microsoft, FedEx } from "../assets/index";
import "./style.scss";


const Brands = () => {
  return (
    <React.Fragment>
      <div className="brand">
         <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="brands">
              <img src= {Airbnb} alt=""  />
             <img src= {Google} alt=""  /> 
              <img src= {Microsoft} alt=""  />
             <img src= {FedEx} alt="" /> 
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Brands
