import React, { useState } from "react";
import "../styles/Login.css";
import logo from "../assets/logo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [userName, setuserName] = useState();
  const [password, setPassword] = useState();
  const [state, setstate] = useState(false);
  const navigate = useNavigate();
  const toggleBtn = () => {
    setstate((prevState) => !prevState);
  };

  function handleUsername(e) {
    setuserName(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function postData() {
    pass;
  }
  function handleSubmit() {
    if (!userName && !password) {
      alert("Please fill all the required fields!!");
    }
    postData();
  }
  return (
    <div className="logincontainer">
      <div className="loginInnerContainer">
        <img src={logo} className="logo" />

        <div className="loginform">
          <h1>Admin Login</h1>
          <div className="userbx">
            <p>Username</p>
            <span className="icon">
              <AccountCircleOutlinedIcon />
            </span>
          </div>
          <input
            type="text"
            placeholder="Enter Username"
            required
            onChange={handleUsername}
          />
          <div className="passwordbx">
            <p>Password</p>
            <span className="icon" onClick={toggleBtn}>
              {state ? (
                <VisibilityOffOutlinedIcon />
              ) : (
                <VisibilityOutlinedIcon />
              )}
            </span>
          </div>
          <input
            type={state ? "password" : "text"}
            placeholder="Enter Password"
            required
            onChange={handlePassword}
          />

          <input
            type="submit"
            className="signInButton"
            value="Sign In"
            onClick={handleSubmit}
          />

          <span onClick={() => navigate("/forgotpassword")}>
            Forgot Password?
          </span>
        </div>
      </div>
    </div>
  );
}
