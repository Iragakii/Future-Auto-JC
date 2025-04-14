import React, { useState, useRef, useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import "./SignUp.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";
const SignUp = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("Sign Up");
  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  // ... (keep all your existing animation code and refs)

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Form validation
    if (state === "Sign Up" && !name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    if (!password.trim()) {
      toast.error("Please enter your password");
      return;
    }

    setIsLoading(true);

    try {
      const config = {
        baseURL: backendUrl,
        headers: {
          "Content-Type": "application/json",
        },
      };

      const endpoint =
        state === "Sign Up" ? "/api/auth/register" : "/api/auth/login";
      const payload =
        state === "Sign Up"
          ? {
              name: name.trim(),
              email: email.trim(),
              password: password.trim(),
            }
          : { email: email.trim(), password: password.trim() };
      console.log(123);
      const { data } = await axios.post(endpoint, payload, config);
      console.log(data);
      if (data?.success) {
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        setIsLoggedin(true);
        getUserData();
        toast.success(
          state === "Sign Up"
            ? "Account created successfully!"
            : "Logged in successfully!"
        );
        navigate("/", { replace: true });
      } else {
        toast.error(data?.message || "Authentication failed");
      }
    } catch (error) {
      console.error("API Error:", error);

      // More detailed error handling
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const errorMsg =
          error.response.data?.message ||
          error.response.statusText ||
          "Request failed";
        toast.error(`Error: ${errorMsg}`);
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("Network error - no response from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error(`Error: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const svgContainerRef = useRef(null);

  // Animation controls for SVG elements
  const eyeLControls = useAnimation();
  const eyeRControls = useAnimation();
  const noseControls = useAnimation();
  const mouthControls = useAnimation();
  const mouthBGControls = useAnimation();
  const toothControls = useAnimation();
  const tongueControls = useAnimation();
  const chinControls = useAnimation();
  const faceControls = useAnimation();
  const eyebrowControls = useAnimation();
  const outerEarLControls = useAnimation();
  const outerEarRControls = useAnimation();
  const earHairLControls = useAnimation();
  const earHairRControls = useAnimation();
  const hairControls = useAnimation();
  const armLControls = useAnimation();
  const armRControls = useAnimation();

  // Initialize arm positions
  useEffect(() => {
    armLControls.start({
      x: -93,
      y: 220,
      rotate: 105,
      originX: 0,
      originY: 0,
    });

    armRControls.start({
      x: -93,
      y: 220,
      rotate: -105,
      originX: 1,
      originY: 0,
    });
  }, []);

  const getPosition = (el) => {
    if (!el) return { x: 0, y: 0 };

    let xPos = 0;
    let yPos = 0;

    while (el) {
      if (el.tagName === "BODY") {
        const xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        const yScroll = el.scrollTop || document.documentElement.scrollTop;

        xPos += el.offsetLeft - xScroll + el.clientLeft;
        yPos += el.offsetTop - yScroll + el.clientTop;
      } else {
        xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
        yPos += el.offsetTop - el.scrollTop + el.clientTop;
      }

      el = el.offsetParent;
    }

    return { x: xPos, y: yPos };
  };

  const getCoord = (e) => {
    if (!emailRef.current || !svgContainerRef.current) return;

    const carPos = emailRef.current.selectionEnd || 0;
    const tempDiv = document.createElement("div");
    const tempSpan = document.createElement("span");
    const copyStyle = getComputedStyle(emailRef.current);

    tempDiv.style.position = "absolute";
    tempDiv.style.visibility = "hidden";
    document.body.appendChild(tempDiv);
    tempDiv.textContent = emailRef.current.value.substr(0, carPos);
    tempSpan.textContent = emailRef.current.value.substr(carPos) || ".";
    tempDiv.appendChild(tempSpan);

    const emailCoords = getPosition(emailRef.current);
    const caretCoords = getPosition(tempSpan);
    const centerCoords = getPosition(svgContainerRef.current);
    const svgCoords = getPosition(svgContainerRef.current);
    const screenCenter =
      centerCoords.x + svgContainerRef.current.offsetWidth / 2;
    const caretPos = caretCoords.x + emailCoords.x;
    const dFromC = screenCenter - caretPos;

    const eyeMaxHorizD = 20;
    const eyeMaxVertD = 10;
    const noseMaxHorizD = 23;
    const noseMaxVertD = 10;

    const eyeLCoords = { x: svgCoords.x + 84, y: svgCoords.y + 76 };
    const eyeRCoords = { x: svgCoords.x + 113, y: svgCoords.y + 76 };
    const noseCoords = { x: svgCoords.x + 97, y: svgCoords.y + 81 };
    const mouthCoords = { x: svgCoords.x + 100, y: svgCoords.y + 100 };

    const getAngle = (x1, y1, x2, y2) => {
      return Math.atan2(y1 - y2, x1 - x2);
    };

    const eyeLAngle = getAngle(
      eyeLCoords.x,
      eyeLCoords.y,
      emailCoords.x + caretCoords.x,
      emailCoords.y + 25
    );
    const eyeLX = Math.cos(eyeLAngle) * eyeMaxHorizD;
    const eyeLY = Math.sin(eyeLAngle) * eyeMaxVertD;

    const eyeRAngle = getAngle(
      eyeRCoords.x,
      eyeRCoords.y,
      emailCoords.x + caretCoords.x,
      emailCoords.y + 25
    );
    const eyeRX = Math.cos(eyeRAngle) * eyeMaxHorizD;
    const eyeRY = Math.sin(eyeRAngle) * eyeMaxVertD;

    const noseAngle = getAngle(
      noseCoords.x,
      noseCoords.y,
      emailCoords.x + caretCoords.x,
      emailCoords.y + 25
    );
    const noseX = Math.cos(noseAngle) * noseMaxHorizD;
    const noseY = Math.sin(noseAngle) * noseMaxVertD;

    const mouthAngle = getAngle(
      mouthCoords.x,
      mouthCoords.y,
      emailCoords.x + caretCoords.x,
      emailCoords.y + 25
    );
    const mouthX = Math.cos(mouthAngle) * noseMaxHorizD;
    const mouthY = Math.sin(mouthAngle) * noseMaxVertD;
    const mouthR = Math.cos(mouthAngle) * 6;

    const chinX = mouthX * 0.8;
    const chinY = mouthY * 0.5;
    const chinS = 1 - (dFromC * 0.15) / 100;

    const faceX = mouthX * 0.3;
    const faceY = mouthY * 0.4;
    const faceSkew = Math.cos(mouthAngle) * 5;
    const eyebrowSkew = Math.cos(mouthAngle) * 25;
    const outerEarX = Math.cos(mouthAngle) * 4;
    const outerEarY = Math.cos(mouthAngle) * 5;
    const hairX = Math.cos(mouthAngle) * 6;
    const hairS = 1.2;

    // Animate elements with Framer Motion
    eyeLControls.start({ x: -eyeLX, y: -eyeLY });
    eyeRControls.start({ x: -eyeRX, y: -eyeRY });
    noseControls.start({
      x: -noseX,
      y: -noseY,
      rotate: mouthR,
      originX: 0.5,
      originY: 0.5,
    });
    mouthControls.start({
      x: -mouthX,
      y: -mouthY,
      rotate: mouthR,
      originX: 0.5,
      originY: 0.5,
    });
    chinControls.start({
      x: -chinX,
      y: -chinY,
      scaleY: chinS > 1 ? 1 - (chinS - 1) : chinS,
    });
    faceControls.start({
      x: -faceX,
      y: -faceY,
      skewX: -faceSkew,
      originX: 0.5,
      originY: 0,
    });
    eyebrowControls.start({
      x: -faceX,
      y: -faceY,
      skewX: -eyebrowSkew,
      originX: 0.5,
      originY: 0,
    });
    outerEarLControls.start({ x: outerEarX, y: -outerEarY });
    outerEarRControls.start({ x: outerEarX, y: outerEarY });
    earHairLControls.start({ x: -outerEarX, y: -outerEarY });
    earHairRControls.start({ x: -outerEarX, y: outerEarY });
    hairControls.start({
      x: hairX,
      scaleY: hairS,
      originX: 0.5,
      originY: 1,
    });

    document.body.removeChild(tempDiv);
  };

  const onEmailInput = (e) => {
    setEmail(e.target.value);
    getCoord(e);

    // Mouth animation based on email input
    if (e.target.value.length > 0) {
      if (e.target.value.includes("@")) {
        // Large mouth
        mouthBGControls.start({ scaleY: 1.5, scaleX: 1.2 });
        toothControls.start({ x: 3, y: -2 });
        tongueControls.start({ y: 2 });
        eyeLControls.start({ scale: 0.65 });
        eyeRControls.start({ scale: 0.65 });
      } else {
        // Medium mouth
        mouthBGControls.start({ scaleY: 1.2, scaleX: 1.1 });
        toothControls.start({ x: 0, y: 0 });
        tongueControls.start({ y: 1 });
        eyeLControls.start({ scale: 0.85 });
        eyeRControls.start({ scale: 0.85 });
      }
    } else {
      // Small mouth
      mouthBGControls.start({ scaleY: 1, scaleX: 1 });
      toothControls.start({ x: 0, y: 0 });
      tongueControls.start({ y: 0 });
      eyeLControls.start({ scale: 1 });
      eyeRControls.start({ scale: 1 });
    }
  };

  const onEmailFocus = () => {
    setIsEmailFocused(true);
    getCoord();
  };

  const onEmailBlur = () => {
    if (email === "") {
      setIsEmailFocused(false);
    }
    resetFace();
  };

  const onPasswordFocus = () => {
    setIsPasswordFocused(true);
    coverEyes();
  };

  const onPasswordBlur = () => {
    setIsPasswordFocused(false);
    uncoverEyes();
  };

  const coverEyes = () => {
    armLControls.start({ x: -93, y: 2, rotate: 0 });
    armRControls.start({ x: -93, y: 2, rotate: 0, delay: 0.1 });
  };

  const uncoverEyes = () => {
    armLControls.start({ y: 220, rotate: 105, transition: { duration: 1.35 } });
    armRControls.start({
      y: 220,
      rotate: -105,
      transition: { duration: 1.35, delay: 0.1 },
    });
  };

  const resetFace = () => {
    eyeLControls.start({ x: 0, y: 0 });
    eyeRControls.start({ x: 0, y: 0 });
    noseControls.start({ x: 0, y: 0, scale: 1, rotate: 0 });
    mouthControls.start({ x: 0, y: 0, rotate: 0 });
    chinControls.start({ x: 0, y: 0, scaleY: 1 });
    faceControls.start({ x: 0, y: 0, skewX: 0 });
    eyebrowControls.start({ x: 0, y: 0, skewX: 0 });
    outerEarLControls.start({ x: 0, y: 0 });
    outerEarRControls.start({ x: 0, y: 0 });
    earHairLControls.start({ x: 0, y: 0 });
    earHairRControls.start({ x: 0, y: 0 });
    hairControls.start({ x: 0, scaleY: 1 });
  };

  return (
    <>
      <div className="all-login">
        <div className="svgContainer" ref={svgContainerRef}>
          <div>
            <svg
              className="mySVG"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
            >
              <defs>
                <circle id="armMaskPath" cx="100" cy="100" r="100" />
              </defs>
              <clipPath id="armMask">
                <use href="#armMaskPath" overflow="visible" />
              </clipPath>
              <circle cx="100" cy="100" r="100" fill="#a9ddf3" />
              <g className="body">
                <path
                  fill="#FFFFFF"
                  d="M193.3,135.9c-5.8-8.4-15.5-13.9-26.5-13.9H151V72c0-27.6-22.4-50-50-50S51,44.4,51,72v50H32.1 c-10.6,0-20,5.1-25.8,13l0,78h187L193.3,135.9z"
                />
                <path
                  fill="none"
                  stroke="#3A5E77"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M193.3,135.9 c-5.8-8.4-15.5-13.9-26.5-13.9H151V72c0-27.6-22.4-50-50-50S51,44.4,51,72v50H32.1c-10.6,0-20,5.1-25.8,13"
                />
                <path
                  fill="#DDF1FA"
                  d="M100,156.4c-22.9,0-43,11.1-54.1,27.7c15.6,10,34.2,15.9,54.1,15.9s38.5-5.8,54.1-15.9 C143,167.5,122.9,156.4,100,156.4z"
                />
              </g>
              <g className="earL">
                <g
                  className="outerEar"
                  fill="#ddf1fa"
                  stroke="#3a5e77"
                  strokeWidth="2.5"
                >
                  <circle cx="47" cy="83" r="11.5" />
                  <path
                    d="M46.3 78.9c-2.3 0-4.1 1.9-4.1 4.1 0 2.3 1.9 4.1 4.1 4.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <g className="earHair">
                  <rect x="51" y="64" fill="#FFFFFF" width="15" height="35" />
                  <path
                    d="M53.4 62.8C48.5 67.4 45 72.2 42.8 77c3.4-.1 6.8-.1 10.1.1-4 3.7-6.8 7.6-8.2 11.6 2.1 0 4.2 0 6.3.2-2.6 4.1-3.8 8.3-3.7 12.5 1.2-.7 3.4-1.4 5.2-1.9"
                    fill="#fff"
                    stroke="#3a5e77"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
              <g className="earR">
                <g
                  className="outerEar"
                  fill="#ddf1fa"
                  stroke="#3a5e77"
                  strokeWidth="2.5"
                >
                  <circle cx="155" cy="83" r="11.5" />
                  <path
                    d="M155.7 78.9c2.3 0 4.1 1.9 4.1 4.1 0 2.3-1.9 4.1-4.1 4.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <g className="earHair">
                  <rect x="131" y="64" fill="#FFFFFF" width="20" height="35" />
                  <path
                    d="M148.6 62.8c4.9 4.6 8.4 9.4 10.6 14.2-3.4-.1-6.8-.1-10.1.1 4 3.7 6.8 7.6 8.2 11.6-2.1 0-4.2 0-6.3.2 2.6 4.1 3.8 8.3 3.7 12.5-1.2-.7-3.4-1.4-5.2-1.9"
                    fill="#fff"
                    stroke="#3a5e77"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
              <path
                className="chin"
                d="M84.1 121.6c2.7 2.9 6.1 5.4 9.8 7.5l.9-4.5c2.9 2.5 6.3 4.8 10.2 6.5 0-1.9-.1-3.9-.2-5.8 3 1.2 6.2 2 9.7 2.5-.3-2.1-.7-4.1-1.2-6.1"
                fill="none"
                stroke="#3a5e77"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="face"
                fill="#DDF1FA"
                d="M134.5,46v35.5c0,21.815-15.446,39.5-34.5,39.5s-34.5-17.685-34.5-39.5V46"
              />
              <path
                className="hair"
                fill="#FFFFFF"
                stroke="#3A5E77"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M81.457,27.929 c1.755-4.084,5.51-8.262,11.253-11.77c0.979,2.565,1.883,5.14,2.712,7.723c3.162-4.265,8.626-8.27,16.272-11.235 c-0.737,3.293-1.588,6.573-2.554,9.837c4.857-2.116,11.049-3.64,18.428-4.156c-2.403,3.23-5.021,6.391-7.852,9.474"
              />
              <g className="eyebrow">
                <path
                  fill="#FFFFFF"
                  d="M138.142,55.064c-4.93,1.259-9.874,2.118-14.787,2.599c-0.336,3.341-0.776,6.689-1.322,10.037 c-4.569-1.465-8.909-3.222-12.996-5.226c-0.98,3.075-2.07,6.137-3.267,9.179c-5.514-3.067-10.559-6.545-15.097-10.329 c-1.806,2.889-3.745,5.73-5.816,8.515c-7.916-4.124-15.053-9.114-21.296-14.738l1.107-11.768h73.475V55.064z"
                />
                <path
                  fill="#FFFFFF"
                  stroke="#3A5E77"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M63.56,55.102 c6.243,5.624,13.38,10.614,21.296,14.738c2.071-2.785,4.01-5.626,5.816-8.515c4.537,3.785,9.583,7.263,15.097,10.329 c1.197-3.043,2.287-6.104,3.267-9.179c4.087,2.004,8.427,3.761,12.996,5.226c0.545-3.348,0.986-6.696,1.322-10.037 c4.913-0.481,9.857-1.34,14.787-2.599"
                />
              </g>
              <g className="eyeL">
                <motion.circle
                  cx="85.5"
                  cy="78.5"
                  r="3.5"
                  fill="#3a5e77"
                  animate={eyeLControls}
                />
                <circle cx="84" cy="76" r="1" fill="#fff" />
              </g>
              <g className="eyeR">
                <motion.circle
                  cx="114.5"
                  cy="78.5"
                  r="3.5"
                  fill="#3a5e77"
                  animate={eyeRControls}
                />
                <circle cx="113" cy="76" r="1" fill="#fff" />
              </g>
              <g className="mouth">
                <motion.path
                  className="mouthBG"
                  fill="#617E92"
                  d="M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z"
                  animate={mouthBGControls}
                />
                <path
                  style={{ display: "none" }}
                  className="mouthSmallBG"
                  fill="#617E92"
                  d="M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z"
                />
                <path
                  style={{ display: "none" }}
                  className="mouthMediumBG"
                  d="M95,104.2c-4.5,0-8.2-3.7-8.2-8.2v-2c0-1.2,1-2.2,2.2-2.2h22c1.2,0,2.2,1,2.2,2.2v2 c0,4.5-3.7,8.2-8.2,8.2H95z"
                />
                <path
                  style={{ display: "none" }}
                  className="mouthLargeBG"
                  d="M100 110.2c-9 0-16.2-7.3-16.2-16.2 0-2.3 1.9-4.2 4.2-4.2h24c2.3 0 4.2 1.9 4.2 4.2 0 9-7.2 16.2-16.2 16.2z"
                  fill="#617e92"
                  stroke="#3a5e77"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                />
                <defs>
                  <path
                    id="mouthMaskPath"
                    d="M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z"
                  />
                </defs>
                <clipPath id="mouthMask">
                  <use href="#mouthMaskPath" overflow="visible" />
                </clipPath>
                <g clipPath="url(#mouthMask)">
                  <motion.g className="tongue" animate={tongueControls}>
                    <circle cx="100" cy="107" r="8" fill="#cc4a6c" />
                    <ellipse
                      className="tongueHighlight"
                      cx="100"
                      cy="100.5"
                      rx="3"
                      ry="1.5"
                      opacity=".1"
                      fill="#fff"
                    />
                  </motion.g>
                </g>
                <motion.path
                  clipPath="url(#mouthMask)"
                  className="tooth"
                  style={{ fill: "#FFFFFF" }}
                  d="M106,97h-4c-1.1,0-2-0.9-2-2v-2h8v2C108,96.1,107.1,97,106,97z"
                  animate={toothControls}
                />
                <path
                  className="mouthOutline"
                  fill="none"
                  stroke="#3A5E77"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  d="M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z"
                />
              </g>
              <motion.path
                className="nose"
                d="M97.7 79.9h4.7c1.9 0 3 2.2 1.9 3.7l-2.3 3.3c-.9 1.3-2.9 1.3-3.8 0l-2.3-3.3c-1.3-1.6-.2-3.7 1.8-3.7z"
                fill="#3a5e77"
                animate={noseControls}
              />
              <g className="arms" clipPath="url(#armMask)">
                <motion.g className="armL" animate={armLControls}>
                  <path
                    fill="#ddf1fa"
                    stroke="#3a5e77"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2.5"
                    d="M121.3 97.4L111 58.7l38.8-10.4 20 36.1z"
                  />
                  <path
                    fill="#ddf1fa"
                    stroke="#3a5e77"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2.5"
                    d="M134.4 52.5l19.3-5.2c2.7-.7 5.4.9 6.1 3.5.7 2.7-.9 5.4-3.5 6.1L146 59.7M160.8 76.5l19.4-5.2c2.7-.7 5.4.9 6.1 3.5.7 2.7-.9 5.4-3.5 6.1l-18.3 4.9M158.3 66.8l23.1-6.2c2.7-.7 5.4.9 6.1 3.5.7 2.7-.9 5.4-3.5 6.1l-23.1 6.2M150.9 58.4l26-7c2.7-.7 5.4.9 6.1 3.5.7 2.7-.9 5.4-3.5 6.1l-21.3 5.7"
                  />
                  <path
                    fill="#a9ddf3"
                    d="M178.8 74.7l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8zM180.1 64l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8zM175.5 54.9l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8zM152.1 49.4l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8z"
                  />
                  <path
                    fill="#fff"
                    stroke="#3a5e77"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M123.5 96.8c-41.4 14.9-84.1 30.7-108.2 35.5L1.2 80c33.5-9.9 71.9-16.5 111.9-21.8"
                  />
                  <path
                    fill="#fff"
                    stroke="#3a5e77"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M108.5 59.4c7.7-5.3 14.3-8.4 22.8-13.2-2.4 5.3-4.7 10.3-6.7 15.1 4.3.3 8.4.7 12.3 1.3-4.2 5-8.1 9.6-11.5 13.9 3.1 1.1 6 2.4 8.7 3.8-1.4 2.9-2.7 5.8-3.9 8.5 2.5 3.5 4.6 7.2 6.3 11-4.9-.8-9-.7-16.2-2.7M94.5 102.8c-.6 4-3.8 8.9-9.4 14.7-2.6-1.8-5-3.7-7.2-5.7-2.5 4.1-6.6 8.8-12.2 14-1.9-2.2-3.4-4.5-4.5-6.9-4.4 3.3-9.5 6.9-15.4 10.8-.2-3.4.1-7.1 1.1-10.9M97.5 62.9c-1.7-2.4-5.9-4.1-12.4-5.2-.9 2.2-1.8 4.3-2.5 6.5-3.8-1.8-9.4-3.1-17-3.8.5 2.3 1.2 4.5 1.9 6.8-5-.6-11.2-.9-18.4-1 2 2.9.9 3.5 3.9 6.2"
                  />
                </motion.g>
                <motion.g className="armR" animate={armRControls}>
                  <path
                    fill="#ddf1fa"
                    stroke="#3a5e77"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2.5"
                    d="M265.4 97.3l10.4-38.6-38.9-10.5-20 36.1z"
                  />
                  <path
                    fill="#ddf1fa"
                    stroke="#3a5e77"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2.5"
                    d="M252.4 52.4L233 47.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l10.3 2.8M226 76.4l-19.4-5.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l18.3 4.9M228.4 66.7l-23.1-6.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l23.1 6.2M235.8 58.3l-26-7c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l21.3 5.7"
                  />
                  <path
                    fill="#a9ddf3"
                    d="M207.9 74.7l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8zM206.7 64l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8zM211.2 54.8l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8zM234.6 49.4l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8z"
                  />
                  <path
                    fill="#fff"
                    stroke="#3a5e77"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M263.3 96.7c41.4 14.9 84.1 30.7 108.2 35.5l14-52.3C352 70 313.6 63.5 273.6 58.1"
                  />
                  <path
                    fill="#fff"
                    stroke="#3a5e77"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M278.2 59.3l-18.6-10 2.5 11.9-10.7 6.5 9.9 8.7-13.9 6.4 9.1 5.9-13.2 9.2 23.1-.9M284.5 100.1c-.4 4 1.8 8.9 6.7 14.8 3.5-1.8 6.7-3.6 9.7-5.5 1.8 4.2 5.1 8.9 10.1 14.1 2.7-2.1 5.1-4.4 7.1-6.8 4.1 3.4 9 7 14.7 11 1.2-3.4 1.8-7 1.7-10.9M314 66.7s5.4-5.7 12.6-7.4c1.7 2.9 3.3 5.7 4.9 8.6 3.8-2.5 9.8-4.4 18.2-5.7.1 3.1.1 6.1 0 9.2 5.5-1 12.5-1.6 20.8-1.9-1.4 3.9-2.5 8.4-2.5 8.4"
                  />
                </motion.g>
              </g>
            </svg>
          </div>
        </div>

        <form className="sign-up-form" onSubmit={onSubmitHandler}>
          {state === "Sign Up" && (
            <div className="inputGroup inputGroup0">
              <label htmlFor="name"></label>
              <div className="icon-fullname">
                <i className="ri-user-line"></i>
                <input
                  placeholder="Full name"
                  type="text"
                  id="name"
                  className="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={onPasswordFocus}
                  onBlur={onPasswordBlur}
                  ref={passwordRef}
                />
              </div>
            </div>
          )}

          <div
            className={`inputGroup inputGroup1 ${
              isEmailFocused || email ? "focusWithText" : ""
            }`}
          >
            <label htmlFor="email1"></label>
            <div className="input-mail">
              <i className="ri-mail-line"></i>
              <input
                placeholder="Email"
                type="email"
                id="email"
                className="email"
                maxLength="256"
                value={email}
                onChange={onEmailInput}
                onFocus={onEmailFocus}
                onBlur={onEmailBlur}
                ref={emailRef}
              />
            </div>

            <span className="indicator"></span>
          </div>
          <div className="inputGroup inputGroup2">
            <label htmlFor="password"></label>
            <div className="input-password">
              <i className="ri-lock-line"></i>
              <input
                placeholder="Password"
                type="password"
                id="password"
                className="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={onPasswordFocus}
                onBlur={onPasswordBlur}
                ref={passwordRef}
              />
            </div>
          </div>
        </form>
        <div className="btn-login">
          {/* This button always stays on the left */}
          <div className="login-1">
            <button
              id="login"
              onClick={() =>
                setState(state === "Sign Up" ? "Login" : "Sign Up")
              }
              disabled={isLoading}
            >
              {state === "Sign Up" ? "Log in" : "Sign up"}
            </button>
          </div>

          {/* This button always stays on the right */}
          <div className="inputGroup4">
            <button
              type="submit"
              id="sign-up-2"
              onClick={onSubmitHandler}
              disabled={isLoading}
            >
              {isLoading
                ? "Processing..."
                : state === "Sign Up"
                ? "Sign up"
                : "Log in"}
            </button>
          </div>
        </div>

        {state === "Login" && (
          <Link className="forgot-password" to="/forgot-password">
            <span className="forgot">Forgot password?</span>
          </Link>
        )}
      </div>
    </>
  );
};

export default SignUp;
