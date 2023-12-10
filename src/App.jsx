import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import GlobalContextProvider from "./context/GlobalStates";

function App() {
  return (
    <div className="appContainer">
      <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
