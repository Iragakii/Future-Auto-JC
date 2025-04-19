import React, { useState, useEffect, useRef } from "react";
import "./PageTwo.css";
import axios from "axios";

// Local fallback images
import carCenter1 from "./car-center1.jpg";
import carCenter2 from "./car-center2.jpg";
import carCenter3 from "./car-center3.jpg";
import carCenter4 from "./car-center4.jpg";
import carLeft1 from "./car-center1.jpg";
import carLeft2 from "./car-center2.jpg";
import carLeft3 from "./car-center3.jpg";
import carLeft4 from "./car-center4.jpg";

const PageTwo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLeftImage, setShowLeftImage] = useState(false);
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);
  const leftImageRef = useRef(null);
  const slideRefs = useRef([]);

  // Local fallback data (same as original)
  const localCarData = [
    {
      title: "Mercedes-Benz 300SL",
      year: "06-1981",
      mileage: "1200 km",
      status: "Back to available",
      sold: false,
      centerImage: carCenter1,
      leftImage: carLeft1,
    },
    {
      title: "Mercedes-Benz 400SL",
      year: "03-1957",
      mileage: "8500 km",
      status: "Sold",
      sold: true,
      centerImage: carCenter2,
      leftImage: carLeft2,
    },
    {
      title: "Mercedes-Benz 400SL",
      year: "03-1957",
      mileage: "8500 km",
      status: "Sold",
      sold: true,
      centerImage: carCenter3,
      leftImage: carLeft3,
    },
    {
      title: "Mercedes-Benz 400SL",
      year: "03-1957",
      mileage: "8500 km",
      status: "Sold",
      sold: true,
      centerImage: carCenter4,
      leftImage: carLeft4,
    },
  ];

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await axios.get(
          "https://future-auto-jc.onrender.com/api/car"
        );
        setCarData(response.data.cars);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching car data:", err);
        setError(err.message);
        setCarData(localCarData); // Fallback to local data
        setLoading(false);
      }
    };

    fetchCarData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || slideRefs.current.length === 0) return;

      const container = containerRef.current;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const containerTop = container.offsetTop;
      const containerBottom = containerTop + container.offsetHeight;

      // Check if we're within PageTwo container
      const isInPageTwo =
        scrollPosition >= containerTop &&
        scrollPosition <= containerBottom - windowHeight;
      setShowLeftImage(isInPageTwo);

      // Find which slide is most visible
      let mostVisibleSlide = 0;
      let maxVisibility = 0;

      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;

        const rect = slide.getBoundingClientRect();
        const visibleHeight =
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const visibilityRatio = visibleHeight / windowHeight;

        if (visibilityRatio > maxVisibility) {
          maxVisibility = visibilityRatio;
          mostVisibleSlide = index;
        }
      });

      if (mostVisibleSlide !== currentSlide) {
        setCurrentSlide(mostVisibleSlide);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSlide, carData]); // Add carData to dependencies

  const currentCar = carData[currentSlide] || carData[0];

  if (loading) {
    return <div className="loading-message">Loading car data...</div>;
  }

  if (error) {
    return (
      <div className="error-message">
        Error loading data: {error}. Using local data.
      </div>
    );
  }

  return (
    <div className="car-slideshow-container" ref={containerRef}>
      {/* Left Car Image - only shown when actively viewing a slide */}
      {currentCar && (
        <div
          className={`left-car-image ${showLeftImage ? "visible" : ""}`}
          ref={leftImageRef}
        >
          <img
            src={
              currentCar.leftImage
                ? `https://future-auto-jc.onrender.com:10000/${currentCar.leftImage}`
                : ""
            }
            alt="Left car view"
            className="left-car-img"
          />
        </div>
      )}

      {/* Car Slides */}
      {carData.map((car, index) => (
        <div
          key={index}
          ref={(el) => (slideRefs.current[index] = el)}
          className={`car-slide ${index === currentSlide ? "active" : ""}`}
          style={{ height: "100vh" }}
          data-slide-index={index}
        >
          <div className="center-image-container">
            <img
              src={
                car.centerImage
                  ? `https://future-auto-jc.onrender.com:10000/${car.centerImage}`
                  : ""
              }
              alt={car.title}
              className={`center-image ${index === 0 ? "first-slide" : ""} ${
                index === carData.length - 1 ? "last-slide" : ""
              }`}
            />
          </div>
          <div className="car-content">
            <h2>{car.title}</h2>
            <div className="car-specs">
              <p>{car.year}</p>
              <p>{car.mileage}</p>
            </div>
            <div className={`status ${car.sold ? "sold" : "available"}`}>
              {car.status}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageTwo;
