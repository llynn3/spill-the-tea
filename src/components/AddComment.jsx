import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseCommentsURL, config } from "../services";

function Comment(props) {
    const [comment, setComment] = useState("");
    const [username, setUsername] = useState("");
    const params = useParams();
    const history = useHistory();

    const [commentTable, setCommentTable] = useState({});
    const [toggleFetch, setToggleFetch] = useState(false);

    useEffect(() => {
        const fetchComments = async () => {
          const response = await axios.get(baseCommentsURL, config);
          setCommentTable(response.data.records);
          console.log(response.data.records);
        }
        fetchComments();
      }, [toggleFetch]);


    useEffect(() => {        
        if (params.id) {
            const addComment = props.comments.find((comment) => comment.id === params.id);

            if (addComment) {
                setComment(addComment.fields.commentInput);
                setUsername(addComment.fields.username);
            }
        }
    }, [params.id, props.posts]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            comment,
            username,
        }
        
        if (params.id) {
            const commentURL = `${baseCommentsURL}/${params.id}`;
            await axios.put(commentURL, { fields: newComment }, config);
        } else {
            await axios.post(baseCommentsURL, { fields: newComment }, config);
        }
        props.setToggleFetch((curr) => !curr);
        history.push("/view");
    }

    return  (
        <div className="add-comment">
      <p>
        {commentTable.map((comment) => ( <Comment key={commentTable.id} comment={commentTable} setToggleFetch={setToggleFetch} />
        ))};
      </p>
        <p className="comment">Add your own comment!</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            required
            autoComplete="off"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="text">Comment:</label>
          <input
            id="text"
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default Comment;


// import axios from "axios";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { baseURL, config } from "../services";

// function Comment(props) {
//     const [comment, setComment] = useState("");
//     const [username, setUsername] = useState("");
//     const history = useHistory();
    
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const addComment = async () => {
//         const newComment = {
//             fields: {
//                 comment,
//                 username,
//             },
//         };
//         await axios.post(baseURL, newComment, config);
//         props.setToggleFetch((curr) => !curr);
//         history.push("/view");
//     };
//     addComment();
// }

// return (
//     <div className="add-comment">
//         <h3>Add a comment</h3>
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="username">Username</label>
//         <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
//         <label htmlFor="text">Comment Body</label>
//         <textarea type="text" id="text" value={comment} onChange={(e) => setComment(e.target.value)} />
//         <button type="submit">Submit</button>
//         </form>
//     </div>
// )
// }

// export default AddComment;