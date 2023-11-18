import "../styles/Dashboard.css";
import Header from "./Header";
import Statistics from "./Statistics";
import ToDo from "./ToDo";
import Spam from "./Spam";
import Doctor from "./Doctor";
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
    <div className="DashboardContainer">
      <div className="header">
        <Header />
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
          <ToDo />
        </div>
        <div className="statistics">
          <Statistics />
        </div>
        <div className="spam">
          <Spam />
        </div>
        <div className="doctor">
          <Doctor />
        </div>
      </div>
    </div>
  );
}
