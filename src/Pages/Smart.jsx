import React from "react";
import "./style.scss";
import { Cover3 } from "../assets/index";

const Smart = () => {
  return (
    <React.Fragment>
      <div className="smart-container">
        {/* <div className="row"> */}
        {/* <div className="col-sm-12 col-md-12 col-lg-1"></div> */}
        {/* <div className="col-sm-12 col-md-12 col-lg-10"> */}
        <div className="growth">
          <div className="imgdiv">
            <img src={Cover3} alt="" className="w-100" />
          </div>
          <div className="colsm">
            <h5
              style={{
                fontWeight: "600",
                color: "#e3e4e6",
                fontSize: "semibold",
                marginBottom: "20px",
              }}
            >
              SMART HOME APP
            </h5>
            <h3
              style={{ width: "auto", fontSize: "30px", marginBottom: "20px" }}
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
              style={{
                backgroundColor: "transparent",
                borderRadius: "10px",
                borderColor: "#e3e4e6",
                color: "#e3e4e6",
                border: "0px solid block",
                padding: "8px 16px 8px 8px",
                gap: "8px",
              }}
            >
              VIEW WORK &gt;
            </button>
          </div>
        </div>
      </div>
      {/* <div className="col-sm-12 col-md-12 col-lg-1"></div> */}
      {/* </div> */}
      {/* </div> */}
    </React.Fragment>
  );
};

export default Smart;
