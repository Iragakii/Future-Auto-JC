// Pagefour.jsx
import React, { useEffect, useRef } from "react";
import "./Pagefour.css";
import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";
import slide4 from "./slide4.jpg";
import slide5 from "./slide5.jpg";
import slide6 from "./slide6.jpg";
import slide7 from "./slide7.jpg";
import slide8 from "./slide8.jpg";
import { Link } from "react-router-dom";

const Pagefour = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleTouchStart = (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const handleTouchEnd = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleTouchMove = (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    // Auto-scroll functionality
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isDown) {
          slider.scrollLeft += 1;

          // Reset scroll position to create seamless loop effect
          if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
            slider.scrollLeft = 0;
          }
        }
      }, 20);
    };

    // Add mouse event listeners
    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    // Add touch event listeners for mobile devices
    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchend", handleTouchEnd);
    slider.addEventListener("touchmove", handleTouchMove);

    startAutoScroll();

    return () => {
      // Clean up all event listeners
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);

      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
      slider.removeEventListener("touchmove", handleTouchMove);

      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <footer className="footer-container">
      {/* Single text that stays on the background */}
      <div className="background-text">Drive your dream</div>

      <div className="slider-wrapper">
        {/* Left side icons */}
        <div className="icons-left">
          <div className="icon-grid">
            <Link to="https://soundcloud.com/iragaki" className="Link-icon">
              <i className="ri-music-fill"></i>
            </Link>
            <Link to="https://opensea.io/iragaki" className="Link-icon">
              <i className="ri-ghost-2-fill"></i>
            </Link>
            <Link to="https://iragaki.io.vn/" className="Link-icon">
              <i className="ri-aliens-fill"></i>
            </Link>
            <Link to="https://www.youtube.com/@iragaki" className="Link-icon">
              <i className="ri-movie-line"></i>
            </Link>
          </div>
        </div>

        {/* Slider container */}
        <div className="slider-container" ref={sliderRef}>
          <div className="slider-track">
            {/* Duplicate images for seamless looping effect */}
            <div className="slide">
              <div className="slide-content">
                <img src={slide1} alt="Luxury sports car" />
              </div>
            </div>
            <div className="slide">
              <div className="slide-content">
                <img src={slide4} alt="Luxury sports car" />
              </div>
            </div>
            <div className="slide">
              <div className="slide-content">
                <img src={slide3} alt="Luxury sports car" />
              </div>
            </div>
            <div className="slide">
              <div className="slide-content">
                <img src={slide6} alt="Luxury sports car" />
              </div>
            </div>
            <div className="slide">
              <div className="slide-content">
                <img src={slide5} alt="Luxury sports car" />
              </div>
            </div>
            <div className="slide">
              <div className="slide-content">
                <img src={slide2} alt="Luxury sports car" />
              </div>
            </div>
            {/* Duplicate first images to create seamless effect */}
            <div className="slide">
              <div className="slide-content">
                <img src={slide7} alt="Luxury sports car" />
              </div>
            </div>
            <div className="slide">
              <div className="slide-content">
                <img src={slide8} alt="Luxury sports car" />
              </div>
            </div>
          </div>
        </div>

        {/* Right side icons */}
        <div className="icons-right">
          <div className="icon-grid">
            <Link
              to="https://www.linkedin.com/in/v%C4%83n-nguy%E1%BB%85n-0b87a832b/  "
              className="Link-icon"
            >
              <i className="ri-linkedin-fill"></i>
            </Link>
            <Link to="https://github.com/Iragakii" className="Link-icon">
              <i className="ri-github-fill"></i>
            </Link>
            <Link
              to="https://www.facebook.com/share/1AiGYWBRDS/"
              className="Link-icon"
            >
              <i className="ri-facebook-circle-line"></i>
            </Link>
            <Link to="https://www.instagram.com/iragaki/" className="Link-icon">
              <i className="ri-instagram-line"></i>
            </Link>
          </div>
        </div>
      </div>
      <h2 className="email-contact">Email : jcgroup.vni@gmail.com</h2>
      <h2 className="phone">Phone : 0349906998</h2>
    </footer>
  );
};

export default Pagefour;
