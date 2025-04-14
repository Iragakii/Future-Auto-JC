import React, { useContext } from "react";
import logo from "../../asset/aston.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcJcb } from "@fortawesome/free-brands-svg-icons";
import { Link, Route, Routes } from "react-router-dom";
import { AppContent } from "../context/AppContext";

const Header = () => {
  const { userData, backendUrl, setUserData, setIsLoggedin } =
    useContext(AppContent);

  return (
    <>
      <div className="up">
        <div className="header">
          <Link to="/">
            <img src={logo} className="logo-ma"></img>
          </Link>
          <div className="up-left">
            <Link className="up-home" to="/best">
              <span>Super</span>
            </Link>
            <Link className="up-home" to="">
              <span>Old Car</span>
            </Link>
            <Link className="up-home" to="">
              <span>Race</span>
            </Link>
            <Link className="up-home" to="">
              <span>About Us</span>
            </Link>
            <Link className="up-home" to="">
              <span>Get in Touch</span>
            </Link>
          </div>
          <div className="up-right">
            <Link>
              <FontAwesomeIcon className="cart" icon={faCcJcb} />
            </Link>
            {userData ? (
              <div className="user-initial">
                {userData.name.charAt(0).toUpperCase()}{" "}
                {/* Show first initial */}
              </div>
            ) : (
              <Link to="/sign-up">
                <button className="btn-sell">Sign Up</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
