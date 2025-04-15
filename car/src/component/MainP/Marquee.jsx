import React from "react";
import "./Marquee.css";

const CSSMarquee = ({
  text,
  speed = 20,
  direction = "left",
  hoverPause = true,
}) => {
  // Create duplicated content for seamless looping
  const duplicatedText = `${text} • ${text}• ${text}• ${text}• ${text} • ${text}  `;

  return (
    <div className="marquee-container">
      <div
        className={`marquee-content ${
          direction === "right" ? "marquee-rtl" : ""
        }`}
        style={{ "--marquee-speed": `${speed}s` }}
        aria-label={text}
      >
        {duplicatedText}
      </div>
    </div>
  );
};

export default CSSMarquee;
