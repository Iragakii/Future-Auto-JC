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
      </Routes>
    </>
  );
}

export default App;
