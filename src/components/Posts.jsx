import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";
import './Posts.css';

function Post(props) {
    const { text, postedBy } = props.post.fields;

    return (
        <div className="post">
            <h2>{text}</h2>
            <h3>Posted By: {postedBy}</h3>
            <Link to={`/view/${props.post.id}`}>
            <button>Get the tea.</button>
            </Link>
            <Link to={`/edit/${props.post.id}`}>
                <button>Fix a lil sumsum'</button>
            </Link>
        </div>
    )
}

export default Post;