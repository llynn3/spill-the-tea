import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseCommentsURL, config } from "../services";

function Comment(props) {
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            const addComment = props.comments.find((comment) => comment.id === params.id);

            if (addComment) {
                setComment(addComment.fields.comment);
                setName(addComment.fields.name);
            }
        }
    }, [params.id, props.comments]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            postId: params.id,
            commentInput: comment,
            usernameInput: name,
        };
            await axios.post(baseCommentsURL, { fields: newComment }, config);

        props.setToggleFetch((curr) => !curr);

        setName("");
        setComment("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Username:
            </label>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <label htmlFor="comment">Comment:
            </label>
            <input value={comment} onChange={(e) => setComment(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Comment;