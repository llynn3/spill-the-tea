import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";

function Post(props) {
    const { text, postedBy } = props.post.fields;

    const removePost = async () => {
        const postURL = `${baseURL}/${props.post.id}`;
        await axios.delete(postURL, config);
        props.setToggleFetch((curr) => !curr);
    }

    return (
        <div className="post">
            <h2>{text}</h2>
            <h3>username: {postedBy}</h3>
            <Link to={`/view/${props.post.id}`}>
            <button>Get the tea.</button>
            </Link>
            <button onClick={removePost}>Clean your mess.</button>
            <Link to={`/edit/${props.post.id}`}>
                <button>Fix a lil sumsum'</button>
            </Link>
        </div>
    )
}

export default Post;