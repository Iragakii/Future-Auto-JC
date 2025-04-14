import React, { useState, useEffect, useRef, useContext } from "react";
import "./EmailVerify.css";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function EmailVerify() {
  const navigate = useNavigate();
  const { userData, backendUrl, getUserData, isLoggedIn } =
    useContext(AppContent);
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef(null);
  const pauseTimeoutRef = useRef(null);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [activeInput, setActiveInput] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = React.useRef([]);

  const phrases = [
    "HASH PASSWORD CODE",
    "WHITE HAT HACKER",
    "IM LOOK AT U RIGHT NOW",
    "THE KING IS BACK",
    "A PROBLEM SOLVER",
    "LOVE FROM JC GRUOP",
    "NINTENDO SWITCH",
    "A CODE ARTIST",
    "XXIII IV MMIII ",
    "Iragaki JC",
  ];

  const animateToNextPhrase = (fromText, toText) => {
    let currentIndex = 0;
    clearInterval(animationRef.current);

    animationRef.current = setInterval(() => {
      if (currentIndex >= toText.length) {
        clearInterval(animationRef.current);
        setDisplayText(toText);

        clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = setTimeout(() => {
          if (isHovering) {
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }, 1500);

        return;
      }

      const newChars = fromText.split("").map((char, i) => {
        return i <= currentIndex ? toText[i] || " " : char;
      });

      setDisplayText(newChars.join(""));
      currentIndex++;
    }, 50);
  };

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      const token = localStorage.getItem("token");
      console.log("ttttt :", token);
      const otpArray = inputRefs.current.map((e) => e.value);
      const otp = otpArray.join("");
      const userId = userData._id;
      console.log("keke :", userId);

      console.log("Submitting OTP:", otp);

      const { data } = await axios.post(
        `${backendUrl}/api/auth/verify-account`,
        { otp, userId },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token if required
          },
        }
      );

      console.log("Server response:", data);

      if (data.success) {
        toast.success(data.message, {
          autoClose: 3000, // 3 seconds
        });
        getUserData();
        navigate("/");
      } else {
        toast.error(data.message, {
          autoClose: 5000, // 5 seconds for errors
        });
      }
    } catch (error) {
      console.error("Verification error:", error);
      toast.error(error.response?.data?.message || error.message, {
        autoClose: 5000, // 5 seconds for errors

        pauseOnHover: true, // Allows user to hover to keep toast visible
      });
    }
  };
  useEffect(() => {
    isLoggedIn && userData && userData.isAccountVerified && navigate("/");
  }, [isLoggedIn, userData]);

  useEffect(() => {
    setDisplayText(phrases[0]);

    return () => {
      clearInterval(animationRef.current);
      clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (isHovering) {
      const currentText = displayText;
      const nextText = phrases[currentPhraseIndex];
      animateToNextPhrase(currentText, nextText);
    }
  }, [currentPhraseIndex]);

  useEffect(() => {
    if (isHovering) {
      const nextIndex = (currentPhraseIndex + 1) % phrases.length;
      setCurrentPhraseIndex(nextIndex);
    } else {
      clearInterval(animationRef.current);
      clearTimeout(pauseTimeoutRef.current);
      setDisplayText(phrases[currentPhraseIndex]);
    }
  }, [isHovering]);

  return (
    <div className="container">
      <div className="text-animation-container">
        <h1>
          Hi, {userData?.name || "... "}
          <br />
          and I'm{" "}
          <span
            className="holographic-text"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {displayText}
          </span>
          <span className="cursor">|</span>
          <br />
          <div className="letter-icon">
            <span className="move-letter">
              .move your mouse to green letter{" "}
              <i className="ri-arrow-up-line"></i> , have fun{" "}
            </span>
            <i className="ri-mail-check-fill"></i>
          </div>
        </h1>
      </div>

      <div className="otp-container">
        <div className="otp-form">
          <h2>Verify Your Email</h2>
          <p>We've sent a 6-digit code to your email</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={onSubmitHandler}>
            <div className="otp-inputs" onPaste={handlePaste}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(e) => (inputRefs.current[index] = e)}
                  type="text"
                  maxLength="1"
                  onInput={(e) => handleInput(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>
            <button type="submit" className="verify-button">
              {isLoading ? "Verifying..." : "Verify"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
