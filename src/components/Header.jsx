import "../styles/Header.css";
import logo from "../assets/logo.png";
export default function () {
  return (
    <>
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="navbar">
        <p>To Do</p>
        <p>Statistics</p>
        <p>Spam Reports</p>
        <p>Doctor Relevancy</p>
      </div>
      <div className="profile">
        <img src={logo} />
        <h3>Jeshika Maharjan</h3>
        <p className="logoutbtn">Logout</p>
      </div>
    </>
  );
}
