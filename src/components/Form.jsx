import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

function Form(props) {
    const [text, setText] = useState("");
    const [username, setUsername] = useState("");
    const [comments, setcomments] = useState("");

    useEffect(() => {
        if (useParams.id) {
            const post = props.posts.find((post) => post.id === useParams.id);

            if (post) {
                setText(post.fields.text);
                setUsername(post.fields.username);
                setComments(post.fields.comments);
            }
        }
    }, [params.id, props.posts]);


}

export default Form;