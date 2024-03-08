import React, { useContext, useState } from "react";
import "../styles/Login.css";
import logo from "../assets/logo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../context/GlobalStates";
export default function Login() {
  const [userName, setuserName] = useState();
  const [password, setPassword] = useState();
  const [state, setstate] = useState(true);
  const [{ baseURL }, { setToken, setUserName }] = useContext(GlobalContext);
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
  async function postData() {
    try {
      const postdata = {
        userName: userName,
        password: password,
      };
      const result = await axios.post(`http://${baseURL}/api/login`, postdata);
      console.log({ result });
      localStorage.setItem("token", result?.data?.data?.token);
      setToken(result?.data?.data?.token);
      setUserName(result?.data?.data?.username);
      navigate("/admin");
    } catch (e) {
      console.log({ e });
    }
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
                <VisibilityOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
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

          <span
            className="forgotPasswordText"
            onClick={() => navigate("/forgotpassword")}
          >
            Forgot Password?
          </span>
        </div>
      </div>
    </div>
  );
}
