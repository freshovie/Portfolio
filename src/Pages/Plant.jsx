import React from 'react';
import "./style.scss";
import { Cover2 } from "../assets/index";

const Plant = () => {
  return (
    <React.Fragment>
        <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6" style={{ width: "100%"}}>
                <h5
                  style={{
                    fontWeight: "600",
                    color: "#e3e4e6",
                    fontSize: "semibold",
                    marginBottom: "20px"
                  }}
                >
                  PLANT IDENTIFICATION APP
                </h5>
                <h3 style={{ width: "80%", fontSize: "30px", marginBottom: "20px" }}>
                  Lorem ipsum dolor sit amet, consectetur{" "}
                  <span
                    style={{
                      color: "#e3e4e6",
                      fontWeight: "600",
                      fontSize: "semibold",
                    }}
                  >
                    adipiscing elit. Ultrices lorem non feugiat egestas amet.
                  </span>
                </h3>
                <p style={{ color: "#aaabac", fontWeight: "200" , marginBottom: "20px"}}>
                  Mobile App
                </p>
                <button
                  style={{
                    backgroundColor: "linear-gradient(to bottom, #3498db, #e74c3c)",
                    borderRadius: "10px",
                    borderColor: "#e3e4e6",
                    color: "#e3e4e6",
                    border: "1px solid block",
                    padding: "8px 16px 8px 8px",
                  }}
                >
                  VIEW WORK {" "} &gt;
                </button>
              </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
                <img src={Cover2} alt="" />
        </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
            </div>      
    </React.Fragment>
  )
}

export default Plant
