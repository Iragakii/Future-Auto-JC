import React, { useState, useEffect } from "react";
import "./CharacterMovementUpdatedFinal.css"; // Updated styles for GIFs
import poster1 from "./poster.jpg";
import poster2 from "./poster3.jpg";
import poster3 from "./poster4.jpg";
import poster4 from "./poster5.jpg";
import gif1 from "./gif1.gif";
import gif2 from "./gif2.gif";

const CharacterMovement = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [poster1, poster4, poster3, poster2];

  // Background cycling logic
  useEffect(() => {
    const backgroundInterval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(backgroundInterval);
  }, []);

  return (
    <div
      className="character-movement-container"
      style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}
    >
      <div className="content-wrapper">
        <div className="text-overlay">
          <h2>IRAGAKI</h2>
        </div>
        <img src={gif2} alt="Gif 2" className="gif2" />
        <img src={gif1} alt="Gif 1" className="gif1" />{" "}
        {/* //change position gif1 */}
      </div>
    </div>
  );
};

export default CharacterMovement;
