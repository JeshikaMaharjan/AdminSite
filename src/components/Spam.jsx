import FeedbackIcon from "@mui/icons-material/Feedback";
import "../styles/Spam.css";
import axios from "axios";
import image from "../assets/logo.png";
import SpamPost from "./SpamPost";
export default function Spam() {
  const data = [
    {
      id: "1",
      post: "sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur",
      date: "2080/09/18",
      photo: image,
      likes: "12",
      is_shared: "false",
      user: "Jeshika",
    },
    {
      id: "2",
      post: "sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur",
      date: "2080/09/18",
      photo: null,
      likes: "12",
      is_shared: "false",
      user: "Jenisha",
    },
    {
      id: "1",
      post: "sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur",
      date: "2080/09/18",
      photo: image,
      likes: "12",
      is_shared: "false",
      user: "Jeshika",
    },
  ];

  return (
    <>
      <div className="spamInner">
        <FeedbackIcon />
        <h2>Spam Reports</h2>
      </div>
      <div className="spamPost">
        <SpamPost data={data} />
      </div>
    </>
  );
}
