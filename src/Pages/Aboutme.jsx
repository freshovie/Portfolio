import React from "react";
import "./style.scss";
import { Img1, Img2, Img3 } from "../assets";

const Aboutme = () => {
  return (
    <React.Fragment>
      <div className="about-container">
        {/* <div className="row"> */}
          {/* <div className="col-sm-12 col-md-12 col-lg-1"></div> */}
          {/* <div className="col-sm-12 col-md-12 col-lg-10"> */}
            <div className="growth d-flex">
              <div className="colsm">
                <h5
                  style={{
                    fontWeight: "600",
                    color: "#e3e4e6",
                    fontSize: "semibold",
                    marginBottom: "20px",
                  }}
                >
                  A BIT ABOUT ME
                </h5>
                <h3
                  style={{
                    width: "80%",
                    fontSize: "30px",
                    marginBottom: "20px",
                  }}
                >
                  I am a UI/UX designer who is passionate about creating{" "}
                  <span
                    style={{
                      color: "#e3e4e6",
                      fontWeight: "600",
                      fontSize: "semibold",
                    }}
                  >
                    beautiful and joyful digital experiences. Besides design, I
                    love music, games and travelling.
                  </span>
                </h3>
              </div>
              <div className="row w-100 align-items-center">
                <div className="col p-0">
                <img src={Img1} alt="" className="rockgod " />
                </div>
                <div className="split col">
                  <img src={Img2} alt="" width='100%' className="mb-4" />
                  <img src={Img3} alt="" width='100%' />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-12 col-md-12 col-lg-1"></div> */}
        {/* </div> */}
      {/* </div> */}
    </React.Fragment>
  );
};

export default Aboutme;
