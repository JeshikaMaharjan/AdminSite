import AssessmentIcon from "@mui/icons-material/Assessment";
import "../styles/Statistics.css";
export default function () {
  return (
    <>
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
    </>
  );
}
