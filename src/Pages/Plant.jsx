import React from "react";
import "./style.scss";
import { Cover2 } from "../assets/index";

const Plant = () => {
  return (
    <React.Fragment>
      <div className="plant-container">
        {/* <div className="row"> */}
          {/* <div className="col-sm-12 col-md-12 col-lg-1"></div> */}
          {/* <div className="col-sm-12 col-md-12 col-lg-10"> */}
            <div className="growth">
              <div className="colsm">
                <h5
                  style={{
                    fontWeight: "600",
                    color: "#e3e4e6",
                    fontSize: "semibold",
                    marginBottom: "20px",
                  }}
                >
                  PLANT IDENTIFICATION APP
                </h5>
                <h3
                  style={{
                    width: "auto",
                    fontSize: "30px",
                    marginBottom: "20px",
                  color: "#6e6e6f"
                  }}
                >
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
                <p
                  style={{
                    color: "#aaabac",
                    fontWeight: "200",
                    marginBottom: "20px",
                  }}
                >
                  Mobile App
                </p>
                <button
                className="btn-grad"
                >
                  VIEW WORK &gt;
                </button>
              </div>
              <div className="imgdiv">
                <img src={Cover2} alt="" className="w-100" />
              </div>
            </div>
          {/* </div> */}
          {/* <div className="col-sm-12 col-md-12 col-lg-1"></div> */}
        {/* </div> */}
      </div>
    </React.Fragment>
  );
};

export default Plant;
