import axios from "axios";
import { baseCommentsURL, config } from "../services";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Comment from "./AddComment";
import Comments from "./Comments";
import "./ViewComments.css";

function ViewComments(props) {

  const [post, setPost] = useState({});
  const params = useParams();

  const [comments, setComments] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false); 

  useEffect(() => {
    if (params.id) {
      const selectedPost = props.posts.find((post) => post.id === params.id);

      if (selectedPost) {
        setPost(selectedPost);
      }
    }
  }, [params.id, props.posts]);

      useEffect(() => {
        const fetchComments = async () => {
          const response = await axios.get(`${baseCommentsURL}?filterByFormula=postId%3D'${params.id}'`, config);
          setComments(response.data.records);
          console.log(response.data.records);
        }
        fetchComments();
      }, [toggleFetch, params.id]);

  return (
    <div className="selected-post">
      <p className="text">{post?.fields?.text}</p>
      <p className="posted-by">Posted By: {post?.fields?.postedBy}</p>
      <section className="view-comments">
        Comments: {post?.fields?.comments}
      </section>
      <div className="comment-container">
        Add your own comment!
        <Comment comments={comments} setToggleFetch={setToggleFetch} />
        {comments.map((comment) => (
          <Comments key={comment.id} comment={comment} /> 
        ))}
      </div>
    </div>
  );
};

export default ViewComments;

