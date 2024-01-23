import React from 'react';
import { Airbnb, Google, Microsoft, FedEx } from "../assets/index";
import "./style.scss";


const Brands = () => {
  return (
    <React.Fragment>
      <div className="images">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="brands d-flex justify-content-between">
              <img src= {Airbnb} alt="" style={{ width: "auto" }} />
             <img src= {Google} alt="" style={{ width: "auto" }} /> 
              <img src= {Microsoft} alt="" style={{ width: "auto" }} />
             <img src= {FedEx} alt="" style={{ width: "auto" }}/> 
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Brands
