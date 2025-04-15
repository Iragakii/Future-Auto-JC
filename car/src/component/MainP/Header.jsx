import React, { useContext } from "react";
import logo from "../../asset/aston.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcJcb } from "@fortawesome/free-brands-svg-icons";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedin } =
    useContext(AppContent);
  const sendVerificationOtp = async () => {
    try {
      const token = localStorage.getItem("token"); // or use your state management/store

      const { data } = await axios.post(
        backendUrl + "/api/auth/send-verify-otp",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        navigate("/email-verify");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.post(
        backendUrl + "/api/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token if required
          },
        }
      );

      data.success && setIsLoggedin(false);
      data.success && setUserData(false);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="up">
        <div className="header">
          <Link to="/">
            <img src={logo} className="logo-ma"></img>
          </Link>
          <div className="up-left">
            <Link className="up-home" to="/best">
              <span>SUPER</span>
            </Link>
            <Link className="up-home" to="">
              <span>OLD CAR</span>
            </Link>
            <Link className="up-home" to="">
              <span>RACE</span>
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
              <div className="user-menu">
                <div className="user-initial">
                  {userData.name?.charAt().toUpperCase()}
                  <div className="dropdown">
                    <ul>
                      {!userData?.isAccountVerified && (
                        <li onClick={sendVerificationOtp}>Verify Email</li>
                      )}
                      <li onClick={logout}>Log out</li>
                    </ul>
                  </div>
                </div>
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

<div className="letter-icon">
  <span className="move-letter">
    .move your mouse to green letter, have fun{" "}
  </span>
  <i className="ri-mail-check-fill"></i>
</div>;
