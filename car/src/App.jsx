import { Route, Routes } from "react-router-dom";
import "./App.css";

import EmailVerify from "./component/Email/EmailVerify";
import MainPage from "./component/MainP/MainPage";
import SignUp from "./component/Sign-up/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./component/Admin/Admin";
import Best from "./component/Super/SuperCar";
import OldCar from "./component/OldCar/OldCar";
import Race from "./component/Race/Race";
import About from "./component/About/About";
import CharacterMovement from "./component/Pagethree/CharacterMovement";
import Carousel from "./component/Slide/Carousel";
import Explor from "./component/Explor/Explor";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/best" element={<Best></Best>}></Route>

        <Route path="/forgot-password"></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route
          path="/email-verify"
          element={<EmailVerify></EmailVerify>}
        ></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
        <Route path="/oldcar" element={<OldCar></OldCar>}></Route>
        <Route path="/race" element={<Race></Race>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/jcb"
          element={<CharacterMovement></CharacterMovement>}
        ></Route>
        <Route path="/slide" element={<Carousel></Carousel>}></Route>
        <Route path="/explor" element={<Explor></Explor>}></Route>
      </Routes>
    </>
  );
}

export default App;
