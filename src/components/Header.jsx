import "../styles/Header.css";
import logo from "../assets/logo.png";
import adminPhoto from "../assets/admin.jpg";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalStates";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const [{ userName }, { setToken }] = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div className="appTitle">
        <div className="logo">
          <img src={logo} />
        </div>
        <p>GeoMedLink</p>
      </div>
      <div className="navbar">
        {/* <p>To Do</p>
        <p>Statistics</p> */}
        <p>Spam Reports</p>
        <p>Doctor Relevancy</p>
      </div>
      <div className="profile">
        <img src={adminPhoto} />
        <h3>{userName}</h3>
        <button className="logoutbtn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
}
