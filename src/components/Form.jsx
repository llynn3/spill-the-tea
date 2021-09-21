import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { useHistory, useParams } from "react-router-dom";

function Form(props) {
    const [text, setText] = useState("");
    const [username, setUsername] = useState("");
    const [comments, setComments] = useState("");
    const history = useHistory();
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            const post = props.posts.find((post) => post.id === params.id);

            if (post) {
                setText(post.fields.text);
                setUsername(post.fields.username);
                setComments(post.fields.comments);
            }
        }
    }, [params.id, props.posts]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            text,
            username,
            comments,
        }

        if (params.id) {
            const postURL = `${baseURL}/${params.id}`;
            await axios.put(postURL, { fields: newPost }, config);
        } else {
            await axios.post(baseURL, { fields: newPost }, config);
        }
        props.setToggleFetch((curr) => !curr);
        history.push("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input id="username" type="text" required autoComplete="off" autoFocus value={username} onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="text">Comments:</label>
            <input id="text" required value={text} onChange={(e) => setText(e.target.value)} 
            />
            <button type="submit">Order's up!</button>
        </form>
    );
}

export default Form;