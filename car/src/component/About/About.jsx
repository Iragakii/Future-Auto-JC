import React from "react";
import Header3 from "./Header3";
import smoke from "./smoke.gif";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="smoke-container">
        <Header3></Header3>
        <div className="group">
          <img src={smoke} alt="smoke" className="smoke" />
          <div className="ty">
            <div className="jc">JC GROUP</div>
            <hr class="cigarette" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
