import AssessmentIcon from "@mui/icons-material/Assessment";
import { BarChart, PieChart } from "@mui/x-charts";
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
          <BarChart
            sx={{
              stroke: "white",
            }}
            xAxis={[
              {
                data: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
                scaleType: "band",
                tickLabelStyle: {
                  fontSize: 20,
                },
              },
            ]}
            leftAxis={null}
            series={[
              {
                data: [2, 5, 3, 4, 5, 7, 7],
              },
            ]}
            height={300}
            width={600}
          />
          <h4>Posts Uploaded</h4>
        </div>
        <div className="pieChart">
          <PieChart
            sx={{
              stroke: "white",
              p: 3,
            }}
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "Blood Donors" },
                  { id: 1, value: 15, label: "Doctors" },
                  { id: 2, value: 20, label: "Organization" },
                  { id: 3, value: 30, label: "Others" },
                ],
              },
            ]}
            height={300}
            width={600}
          />
          <h4>User Distribution</h4>
        </div>
      </div>
    </>
  );
}
