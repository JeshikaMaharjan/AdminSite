import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import Dashboard from "../components/Dashboard";
import { GlobalContext } from "../context/GlobalStates";

const NavigationStack = () => {
  const [{ token }] = useContext(GlobalContext);
  console.log({ token });
  return (
    <Routes>
      {!token ? (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </>
      ) : (
        <Route path="/admin" element={<Dashboard />} />
      )}
    </Routes>
  );
};

export default NavigationStack;
