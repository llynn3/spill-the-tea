

function ViewComments(props) {
    // const text = props.post.fields;

    return (
        <div className="comments">
            {/* <p>{text}</p> */}
            <p>please work..</p>
        </div>
    )
}

export default ViewComments;

// import { useHistory, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// function ViewComments(props) {
//     const [post, setPost] = useState("");
//     const params = useParams();

//     useEffect(() => {
//         if (props.posts.length) {
//             let selectedPost = props.posts.find((post) => post.id === params.id);
//         };
//         setPost();
//     }, [params.id, props.posts]);

//     return (
//         <div className="selected-post">
//             <section className="view-comments">
//                 {post}
//             </section>
//         </div>
//     )
// }

// export default ViewComments;