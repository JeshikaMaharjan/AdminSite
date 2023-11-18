"use client";
import React, { useState } from "react";
import "../styles/ForgotPassword.css";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [userName, setuserName] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  function handleUsername(e) {
    setuserName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function postData() {
    // pass;
    navigate("/login");
  }
  function handleSubmit() {
    if (!userName && !email) {
      alert("Please fill all the required fields!!");
    }
    postData();
  }
  return (
    <div className="forgotPasswordContainer">
      <div className="forgotInnerContainer">
        <h1>Forgot Password</h1>

        <p>Username</p>
        <input
          type="text"
          placeholder="Enter Username"
          required
          onChange={handleUsername}
        />
        <p>Email Address</p>

        <input
          type="text"
          placeholder="Enter email address"
          required
          onChange={handleEmail}
        />

        <input
          type="submit"
          className="forgotButton"
          value="Submit"
          onClick={handleSubmit}
        />
        <p>
          Please enter your valid email address and username below. Check your
          email for further details.
        </p>
      </div>
    </div>
  );
}
