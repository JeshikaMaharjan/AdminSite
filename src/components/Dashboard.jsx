import "../styles/Dashboard.css";
import HouseIcon from "@mui/icons-material/House";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AssessmentIcon from "@mui/icons-material/Assessment";
import FeedbackIcon from "@mui/icons-material/Feedback";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import logo from "../assets/logo.png";
export default function Dashboard() {
  return (
    <>
      <div className="DashboardContainer">
        <div className="header">
          <img src={logo} className="logo" />
          <div className="navbar">
            <span>To Do</span>
            <span>Statistics</span>
            <span>Spam Reports</span>
            <span>Doctor Relevancy</span>
          </div>
          <div className="profile">
            <img src={logo} />
          </div>
          <div className="logout">logout</div>
        </div>
        <div className="main">
          <div className="dashboard">
            <div className="dashboardInner">
              <h1>Admin Dashboard</h1>
            </div>
            <h3 className="date">February 2,2021</h3>
          </div>
          <div className="todo">
            <div className="todoInner">
              <FormatListBulletedIcon />
              <h2>To Do</h2>
            </div>
          </div>
          <div className="statistics">
            <div className="statisticsInner">
              <AssessmentIcon />
              <h2>Statistics</h2>
            </div>
          </div>
          <div className="spam">
            <div className="spamInner">
              <FeedbackIcon />
              <h2>Spam Reports</h2>
            </div>
          </div>
          <div className="doctor">
            <div className="doctorInner">
              <VerifiedUserIcon />
              <h2>Doctor Relevancy</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
