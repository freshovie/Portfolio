import React from "react";
import "./style.scss";

const Client = () => {
  return (
    <div>
      <div className="quotes">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
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
            <div className="col-sm-12 col-md-12 col-lg-6"></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Client;
