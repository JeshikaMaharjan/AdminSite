export default function SpamPost({ data }) {
  console.log(data);
  async function handleSpam(e) {
    const spam = e.target.id;
    console.log(spam);
    console.log(e.target.value);
    const result = await axios.post("url", spam);
    console.log(result);
  }
  return (
    <>
      {data.map((post, key) => {
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
                value={post.user}
              >
                Spam
              </button>
              <button
                type="submit"
                onClick={handleSpam}
                id="false"
                value={post.user}
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
