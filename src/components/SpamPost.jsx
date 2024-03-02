import { useContext } from "react";
import { GlobalContext } from "../context/GlobalStates";
import axios from "axios";

export default function SpamPost({ data }) {
  const [{ baseURL }] = useContext(GlobalContext);
  console.log(data);
  async function handleSpam(e) {
    const spam = e.target.value;
    try {
      const postData = {
        id: spam,
      };
      console.log(spam);
      const result = await axios.put(
        `http://${baseURL}/api/spam/verify`,
        postData
      );
      console.log(result);
    } catch (e) {
      console.log({ e });
    }
  }
  return (
    <>
      {data?.map((post, key) => {
        return (
          <div className="spamPostInner">
            <div className="post">
              <img src={post.photo}></img>
              <div className="caption"> {post.post}</div>
              <h3>{post.likes} likes</h3>
            </div>
            <div className="postAction">
              <p>Posted By: </p>
              <p className="user">{post.user}</p>
              <p>{post.date}</p>
              <button
                type="submit"
                onClick={handleSpam}
                id="true"
                value={post.id}
              >
                Spam
              </button>
              <button
                type="submit"
                onClick={handleSpam}
                id="false"
                value={post.id}
              >
                Not Spam
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
