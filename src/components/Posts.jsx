import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";

function Post(props) {
    const { text, postedBy, comments } = props.post.fields;

    const removePost = async () => {
        const postURL = `${baseURL}/${props.post.id}`;
        await axios.delete(postURL, config);
        props.setToggleFetch((curr) => !curr);
    }

    return (
        <div className="post">
            <h2>{text}</h2>
            <h3>username: {postedBy}</h3>
            <h4>comments: {comments}</h4>
            <button onClick={removePost}>Clean your mess.</button>
            <Link to={`/edit/${props.post.id}`}>
                <button>Fix a lil sumsum'</button>
            </Link>
        </div>
    )
}

export default Post;