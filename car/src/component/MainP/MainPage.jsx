import React from "react";
import { Canvas } from "@react-three/fiber";
import Header from "./Header";
import Left from "./Left";
import "./Left.css";
import Ek from "../bestcar/Ek";

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
    </>
  );
};

export default MainPage;
