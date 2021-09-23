import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "../services";
import "./ViewComments.css";

function ViewComments(props) {
  const [post, setPost] = useState({});
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const selectedPost = props.posts.find((post) => post.id === params.id);

      if (selectedPost) {
        setPost(selectedPost);
      }
    }
  }, [params.id, props.posts]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      fields: {
        username,
        text: comment,
      },
    };
    setUsername("");
    setComment("");

    if (params.id) {
      const postBaseURL = `${baseURL}/${params.id}`;
      await axios.put(postBaseURL, { fields: newComment }, config);
    } else {
      await axios.post(baseURL, { fields: newComment }, config);
    props.setToggleFetch((curr) => !curr);
    };
    history.push("/");
    newComment();
  };

  return (
    <div className="selected-post">
      <p className="text">{post?.fields?.text}</p>
      <p className="posted-by">Posted By: {post?.fields?.postedBy}</p>
      <section className="view-comments">
        Comments: {post?.fields?.comments}
      </section>
      <div className="add-comment">
        <p className="comment">Add your own comment!</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            required
            autoComplete="off"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="text">Comment:</label>
          <input
            id="text"
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ViewComments;
