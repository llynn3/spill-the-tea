import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "../services";
import './ViewComments.css';

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


    return (
        <div className="selected-post">
            <p className="text">{post?.fields?.text}</p>
            <p className="posted-by">Posted By: {post?.fields?.postedBy}</p>
            <section className="view-comments">
                Comments: {post?.fields?.comments}
            </section>
        </div>
    )
}

export default ViewComments;