"use client";
import React, { useContext, useState } from "react";
import "../styles/ForgotPassword.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../context/GlobalStates";

export default function ForgotPassword() {
  const [userName, setuserName] = useState();
  const [email, setEmail] = useState();
  const [{ baseURL }] = useContext(GlobalContext);
  const navigate = useNavigate();
  function handleUsername(e) {
    setuserName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  async function postData() {
    try {
      const postdata = {
        userName: userName,
        email: email,
      };
      const result = await axios.post(
        `http://${baseURL}/api/forget/password`,
        postdata
      );
      console.log({ result });

      navigate("/login");
    } catch (e) {
      console.log({ e });
    }
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
