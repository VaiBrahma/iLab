import { NavLink } from "react-router-dom";
import "./header.css";
import { useState } from "react";

export default function Headers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    window.localStorage.setItem("isLoggedIn", true);
    console.log(window.localStorage.getItem("isLoggedIn"));
    const p = window.location.origin;
    window.location.href = p;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-main  h-screen">
      <div className="header-main-1 ">
        <div className="header-img">
          <img
            src="/logos/logo2.png"
            alt=""
            className="iLab-Logo"
            style={{ height: "94px", width: "194px" }}
          />
        </div>
        <div className="header-mid">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" className="navLink">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/labreport"
                activeClassName="active"
                className="navLink"
              >
                Lab Report
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/visualaid"
                activeClassName="active"
                className="navLink"
              >
                Visual Aid
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bodyChart"
                activeClassName="active"
                className="navLink"
              >
                Body Chart
              </NavLink>
            </li>
            <li>
              <NavLink to="/interpreter" className="navLink">
                Smart Interpreter
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header-end getAnoBTN bottom-2 absolute active:scale-105">
          <button onClick={handleClick}>
            Get Another Report
          </button>
        </div>
      </div>
    </div>
  );
}
