import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import "../styles/ToDo.css";
export default function ToDo() {
  return (
    <>
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
    </>
  );
}
