import React from "react";
import "./style.scss";
import { Background } from "../assets";

const Client = () => {
  return (
    <React.Fragment>
      {/* <div className="clients"> */}
        {/* <div className="row"> */}
          {/* <div className="col-sm-12 col-md-12 col-lg-1"></div> */}
          {/* <div className="col-sm-12 col-md-12 col-lg-10"> */}
            <div className="speed">
              <img src= { Background } alt="" />
              <p
                style={{
                  fontSize: "30px",
                  width: "70%",
                  marginBottom: "20px",
                  marginTop: "20px",

                }}
              >
                Some of{" "}
                <span style={{ color: "#e3e4e6", fontWeight: "700" }}>
                  the clients I have designed for
                </span>
              </p>
            </div>
          {/* </div> */}
          {/* // <div className="col-sm-12 col-md-12 col-lg-1"></div> */}
        {/* </div> */}
      {/* // </div> */}
    </React.Fragment>
  );
};

export default Client;
