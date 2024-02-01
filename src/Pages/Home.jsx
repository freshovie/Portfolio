import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <React.Fragment>
      {/* <div className="home"> */}
        {/* <div className="row"> */}
          {/* <div className="col-sm-12 col-md-12 col-lg-1"></div> */}
          {/* <div className="col-sm-12 col-md-12 col-lg-10"> */}
            <center>
              <h2
                style={{
                  marginTop: "20rem",
                  fontSize: "3rem",
                  color: "7d7e82",
                  width: "auto",
                }}
              >
                I'm a designer specialising in{" "}
                <span style={{ color: "#e3e4e6" }}>UI/UX</span> and{" "} <br />
                <span style={{ color: "#e3e4e6" }}>Interaction Design</span>
              </h2>
              <div
                className="downways"
                style={{ color: "#e3e4e6", marginTop: "28rem" }}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </center>
          {/* </div> */}
          {/* <div className="col-sm-12 col-md-12 col-lg-1"></div> */}
        {/* </div> */}
      {/* </div> */}
    </React.Fragment>
  );
};

export default Home;
