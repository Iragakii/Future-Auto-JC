import { Route, Routes } from "react-router-dom";
import "./App.css";
import Best from "./component/SuperCar";
import EmailVerify from "./component/Email/EmailVerify";
import MainPage from "./component/MainP/MainPage";
import SignUp from "./component/Sign-up/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./component/Admin/Admin";
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
      </Routes>
    </>
  );
}

export default App;
