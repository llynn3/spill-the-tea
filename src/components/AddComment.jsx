


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