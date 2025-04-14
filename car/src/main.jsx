import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./component/context/AppContext";
import App from "./App";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <App></App>
    </AppContextProvider>
  </BrowserRouter>
);
