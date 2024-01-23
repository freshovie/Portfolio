import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaBehance, FaDribbble, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <React.Fragment>
      <center>
        <div className="footer">
          <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="col-sm-12 col-md-12 col-lg-4"></div>
            <div className="col-sm-12 col-md-12 col-lg-4">
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
              <div
                className="imgedit d-flex justify-content-around"
                style={{ color: "#7d7e7f", fontSize: "30px", marginBottom: "1.5rem"}}
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <FaBehance />
                <FaDribbble />
                <FaLinkedinIn />
              </div>
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
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4"></div>

          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          </div>
        </div>
      </center>
    </React.Fragment>
  );
};

export default Footer;
