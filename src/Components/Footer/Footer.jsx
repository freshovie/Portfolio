import React from "react";
import "./footer.scss";
import { FaBehance, FaDribbble, FaLinkedinIn, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <React.Fragment>
        <div className="footer">
          {/* <div className="row"> */}
          {/* <div className="col-sm-12 col-md-12 col-lg-1"></div> */}
          {/* <div className="col-sm-12 col-md-12 col-lg-10"> */}
            <center>
              <h2 style={{ color: "#7d7e7f", marginBottom: "10px" }}>
                Get{" "}
                <span
                  className="makeb"
                  style={{ color: "White", fontSize: "35px", fontWeight: "700" }}
                >
                  in Touch.
                </span>
              </h2>
              <p style={{ color: "#7d7e7f", marginBottom: "1.5rem" }}>So that we can talk about...</p>
              <center>
              <div
                className="imgedit align-items-center"
                style={{ color: "#7d7e7f", fontSize: "40px", marginBottom: "1.5rem", }}
              >
                <FaEnvelope />
                <FaBehance />
                <FaDribbble />
                <FaLinkedinIn />
              </div>
              </center>
              <p style={{ color: "#7d7e7f", marginBottom: "10px" }}>
                Made with &#10083; by {"  "}
                <span
                  style={{
                    color: "#E3E4E6",
                    fontSize: "bolder",
                    fontWeight: "700"
                  }}
                >
                  Srinivas DeZign
                </span>
              </p>
              </center>
            </div>
          {/* <div className="col-sm-12 col-md-12 col-lg-1"></div> */}
          {/* </div> */}
        {/* </div> */}
    </React.Fragment>
  );
};

export default Footer;
