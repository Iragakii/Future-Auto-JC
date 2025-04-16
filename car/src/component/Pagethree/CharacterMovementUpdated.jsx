import React, { useEffect, useRef, useState } from "react";
import manseq from "./manSeq2.png"; // Importing the character image
import poster1 from "./poster1.jpg"; // Importing the first background image
import poster2 from "./poster.jpg"; // Importing the second background image
import tant from "./tant.jpg"; // Importing the third background image
import "./CharacterMovement.css"; // Optional if you want to keep styles separate

const CharacterMovementUpdated = () => {
  const containerRef = useRef(null);
  const characterRef = useRef(null);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [poster1, poster2, tant];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000); // Change background every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="character-movement-container"
      ref={containerRef}
      style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}
    >
      <div className="content-wrapper">
        <h1 className="title">Character Animation</h1>
        <div className="video-character" ref={characterRef}>
          <img src={manseq} alt="Character" className="character-image" />
          {/* Add logic for step-by-step animation if necessary */}
          {/* Example: Use a state to manage the current frame of the animation */}
        </div>
      </div>
      <style jsx>{`
        .character-movement-container {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100vh;
          background-size: cover;
          transition: background-image 1s ease-in-out;
        }

        .video-character {
          position: absolute;
          bottom: 20px; /* Adjust as needed */
          left: 50%;
          transform: translateX(-50%);
        }

        .character-image {
          width: 100px; /* Adjust size as needed */
          animation: moveCharacter 5s infinite alternate; /* Example animation */
        }

        @keyframes moveCharacter {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100px);
          } /* Move character */
        }
      `}</style>
    </div>
  );
};

export default CharacterMovementUpdated;
