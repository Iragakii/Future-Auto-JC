import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailVerify = lazy(() => import("./component/Email/EmailVerify"));
const MainPage = lazy(() => import("./component/MainP/MainPage"));
const SignUp = lazy(() => import("./component/Sign-up/SignUp"));
const Admin = lazy(() => import("./component/Admin/Admin"));
const Best = lazy(() => import("./component/Super/SuperCar"));
const OldCar = lazy(() => import("./component/OldCar/OldCar"));
const Race = lazy(() => import("./component/Race/Race"));
const About = lazy(() => import("./component/About/About"));
const CharacterMovement = lazy(() =>
  import("./component/Pagethree/CharacterMovement")
);
const Carousel = lazy(() => import("./component/Slide/Carousel"));
const Explor = lazy(() => import("./component/Explor/Explor"));

function App() {
  return (
    <>
      <ToastContainer />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
}

export default App;
