import FeedbackIcon from "@mui/icons-material/Feedback";
import "../styles/Spam.css";
import axios from "axios";
import image from "../assets/logo.png";
import SpamPost from "./SpamPost";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalStates";
export default function Spam() {
  const [data, setData] = useState([]);
  const [{ baseURL }] = useContext(GlobalContext);
  async function getData() {
    try {
      const result = await axios.get(`http://${baseURL}/api/spam`);
      console.log(result?.data?.data);
      setData(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  async function handleSpam(e) {
    const spam = e.target.value;
    try {
      const postData = {
        id: spam,
      };
      const result = await axios.put(
        `http://${baseURL}/api/spam/verify`,
        postData
      );
      location.reload();
    } catch (e) {
      console.log({ e });
    }
  }
  async function handleNotSpam(e) {
    const spam = e.target.value;
    try {
      const postData = {
        id: spam,
      };
      const result = await axios.put(
        `http://${baseURL}/api/spam/reject`,
        postData
      );
      location.reload();
    } catch (e) {
      console.log({ e });
    }
  }
  // const data = [
  //   {
  //     id: "1",
  //     post: "sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur",
  //     date: "2080/09/18",
  //     photo: image,
  //     likes: "12",
  //     is_shared: "false",
  //     user: "Jeshika",
  //   },
  //   {
  //     id: "2",
  //     post: "sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur",
  //     date: "2080/09/18",
  //     photo: null,
  //     likes: "12",
  //     is_shared: "false",
  //     user: "Jenisha",
  //   },
  //   {
  //     id: "1",
  //     post: "sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur",
  //     date: "2080/09/18",
  //     photo: image,
  //     likes: "12",
  //     is_shared: "false",
  //     user: "Jeshika",
  //   },
  // ];

  return (
    <div>
      <div className="spamInner">
        <FeedbackIcon />
        <h2>Spam Reports</h2>
      </div>
      <div className="spamPost">
        {data?.map((post, key) => (
          <div className="spamPostInner" key={key}>
            <div className="post">
              {!!post?.photo && post?.photo !== "" && (
                <img src={"data:image/jpeg;base64," + post?.photo} alt="Post" />
              )}
              <div className="caption">{post?.post}</div>
            </div>
            <div className="postAction">
              <p>Posted By: </p>
              <p className="user">{post?.user?.userName}</p>
              <p>{new Date(post?.date).toISOString().split("T")[0]}</p>
              <button
                type="submit"
                onClick={(e) => {
                  handleSpam(e);
                }}
                id="true"
                value={post?.id}
              >
                Spam
              </button>
              <button
                type="submit"
                onClick={(e) => {
                  handleNotSpam(e);
                }}
                id="false"
                value={post?.id}
              >
                Not Spam
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
