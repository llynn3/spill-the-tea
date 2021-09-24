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
            id: params.id,
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

// import axios from "axios";
// import { useHistory, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { baseCommentsURL, config } from "../services";

// function Comment(props) {
//     const [comment, setComment] = useState("");
//     const [username, setUsername] = useState("");
//     const params = useParams();
//     const history = useHistory();

//     const [commentTable, setCommentTable] = useState({});
//     const [toggleFetch, setToggleFetch] = useState(false);

//     useEffect(() => {
//         const fetchComments = async () => {
//           const response = await axios.get(baseCommentsURL, config);
//           setCommentTable(response.data.records);
//           console.log(response.data.records);
//         }
//         fetchComments();
//       }, [toggleFetch]);


//     useEffect(() => {        
//         if (params.id) {
//             const addComment = props.comments.find((comment) => comment.id === params.id);

//             if (addComment) {
//                 setComment(addComment.fields.commentInput);
//                 setUsername(addComment.fields.username);
//             }
//         }
//     }, [params.id, props.posts]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const newComment = {
//             comment,
//             username,
//         }
        
//         if (params.id) {
//             const commentURL = `${baseCommentsURL}/${params.id}`;
//             await axios.put(commentURL, { fields: newComment }, config);
//         } else {
//             await axios.post(baseCommentsURL, { fields: newComment }, config);
//         }
//         props.setToggleFetch((curr) => !curr);
//         history.push("/view");
//     }

//     return  (
//         <div className="add-comment">
//       <p>
//         {commentTable.map((comment) => ( <Comment key={commentTable.id} comment={commentTable} setToggleFetch={setToggleFetch} />
//         ))};
//       </p>
//         <p className="comment">Add your own comment!</p>

//       </div>
//     )
// }

// export default Comment;
