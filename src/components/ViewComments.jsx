import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "../services";

function ViewComments(props) {
const [post, setPost] = useState({});
const params = useParams();

useEffect(() => {
    if (params.id) {
        const selectedPost = props.posts.find((post) => post.id === params.id);

        if(selectedPost) {
            setPost(selectedPost)
        }
    };
}, [params.id, props.posts]);

const removePost = async () => {
    const postURL = `${baseURL}/${props.post.id}`;
    await axios.delete(postURL, config);
    props.setToggleFetch((curr) => !curr);
}

    return (
        <div className="selected-post">
            <p>{post?.fields?.text}</p>
            <p>Posted By: {post?.fields?.postedBy}</p>
            <section className="view-comments">
                The tea: {post?.fields?.comments}
            </section>
            <button onClick={removePost}>Clean your mess.</button>
        </div>
    )
}

export default ViewComments;