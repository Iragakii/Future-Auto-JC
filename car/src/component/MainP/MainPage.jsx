import React from "react";
import { Canvas } from "@react-three/fiber";
import Header from "./Header";
import Left from "./Left";
import "./Left.css";
import Ek from "../bestcar/Ek";
import CSSMarquee from "./Marquee";
import PageTwo from "../Pagetwo/pagetwo";

import CharacterMovementUpdated from "../Pagethree/CharacterMovementUpdated";

const MainPage = () => {
  return (
    <>
      <Header></Header>
      <div className="car-and-text">
        <Left></Left>
        <Canvas
          className="main-p-car"
          shadows
          camera={{ position: [2, 2, 2], fov: 20 }}
        >
          <Ek></Ek>
        </Canvas>
      </div>
      <CSSMarquee
        text=" Aston Martin • Merserdez • BWM • Ferrari • Roll Royce • Bentley • Nissan • Porches 
        • Maserti • Bugati • Toyota • Honda • Mazda  • Lexus • Hongqi • Tesla • Subaru • Chevrolet  • Ford • Jaguar
        • Developer • Designer  "
        speed={50}
      ></CSSMarquee>
      <PageTwo></PageTwo>
      <CSSMarquee
        text=" Aston Martin • Merserdez • Hacker • Ferrari • Sphynx • Bentley • JC Group • Iragaki  
        • Maserti • Bugati • Toyota • Honda • Mazda  • Lexus • Hongqi • Tesla • Subaru • Chevrolet  • Ford • Jaguar
        • Developer • Designer  "
        speed={50}
      ></CSSMarquee>

      <CharacterMovementUpdated></CharacterMovementUpdated>
    </>
  );
};

export default MainPage;
