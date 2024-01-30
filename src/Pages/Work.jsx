import React from "react";
import "./style.scss";
import { Cover1 } from "../assets/index";

const Work = () => {
  return (
    <React.Fragment>
      <div className="work">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
            <h2 style={{ marginTop: "50px", marginBottom: "20px" }}>
              Selected{" "}
              <span style={{ color: "#e3e4e6", fontWeight: "600" }}>Works</span>
            </h2>
            <div className="growth">
              <div className="imgdiv">
                <img src={Cover1} alt="" className="w-100" />
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
                  Real estate Template
                </h5>
                <h3
                  style={{
                    width: "80%",
                    fontSize: "30px",
                    marginBottom: "20px",
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
                  Website Design
                </p>
                <button
                  style={{
                    backgroundColor: "transparent",
                    borderRadius: "10px",
                    borderColor: "#e3e4e6",
                    color: "#e3e4e6",
                    border: "1px solid block",
                    padding: "8px 16px 8px 8px",
                  }}
                >
                  VIEW WORK &gt;
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Work;
