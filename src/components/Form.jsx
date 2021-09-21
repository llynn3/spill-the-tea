import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { useHistory, useParams } from "react-router-dom";

function Form(props) {
    const [text, setText] = useState("");
    const [postedBy, setPostedBy] = useState("");
    const history = useHistory();
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            const post = props.posts.find((post) => post.id === params.id);

            if (post) {
                setText(post.fields.text);
                setPostedBy(post.fields.postedBy);
            }
        }
    }, [params.id, props.posts]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            text,
            postedBy,
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
            <label htmlFor="postedBy">Username:</label>
            <input id="postedBy" type="text" required autoComplete="off" autoFocus value={postedBy} onChange={(e) => setPostedBy(e.target.value)}
            />
            <label htmlFor="text">What's the tea?</label>
            <input id="text" required value={text} onChange={(e) => setText(e.target.value)} 
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;