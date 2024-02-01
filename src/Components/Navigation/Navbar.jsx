import React from "react";
import "./navbar.scss"; // Assuming this is your CSS file
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets";

const Navbar = () => {
  return (
    <React.Fragment>
      {/* <div className="row"> */}
        {/* <div className="col-sm-12 col-md-12 col-lg-1"></div> */}
        {/* <div className="col-sm-12 col-md-12 col-lg-10"> */}
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <a className="navbar-brand ml-0" href="h">
              <img src={Logo} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="navbar-toggler-icon"
                style={{ color: "white", textColor: "white" }}
              ></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav mr-0 d-flex w-25"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <NavLink
                  to="/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#c247a2" : "#ffffff",
                    };
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/h"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#c247a2" : "#ffffff",
                    };
                  }}
                >
                  Work
                </NavLink>
                <NavLink
                  to="/l"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#c247a2" : "#ffffff",
                    };
                  }}
                >
                  About
                </NavLink>
              </ul>
            </div>
          </nav>
        {/* </div> */}
        {/* <div className="col-sm-12 col-md-12 col-lg-1"></div> */}
      {/* </div> */}
    </React.Fragment>
  );
};

export default Navbar;
