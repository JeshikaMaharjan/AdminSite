import "../styles/Dashboard.css";
import HouseIcon from "@mui/icons-material/House";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AssessmentIcon from "@mui/icons-material/Assessment";
import FeedbackIcon from "@mui/icons-material/Feedback";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import logo from "../assets/logo.png";
export default function Dashboard() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();
  const year = today.getFullYear();
  const month = months[today.getMonth()];
  const day = today.getDate();

  return (
    <>
      <div className="DashboardContainer">
        <div className="header">
          <div className="logo">
            {/* <h2>kkk</h2> */}
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
        </div>
        <div className="main">
          <div className="dashboard">
            <div className="dashboardInner">
              <h1>Admin Dashboard</h1>
            </div>
            <h3 className="date">
              {month} {day}, {year}
            </h3>
          </div>
          <div className="todo">
            <div className="todoInner">
              <FormatListBulletedIcon />
              <h2>To Do</h2>
            </div>
            <div className="circles">
              <div className="circle">4</div>
              <span>Spam Reports</span>
              <div className="circle">5</div>
              <span>Doctor Relevancy</span>
            </div>
          </div>
          <div className="statistics">
            <div className="statisticsInner">
              <AssessmentIcon />
              <h2>Statistics</h2>
            </div>
            <div className="charts">
              <div className="graph">
                <img src="../src/assets/graph.png " />
              </div>
              <div className="pieChart">
                <img src="../src/assets/piechart.png " />
              </div>
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
