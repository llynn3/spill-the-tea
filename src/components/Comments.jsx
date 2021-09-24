import "./Comments.css";

const Comments = (props) => {
    const { commentInput , usernameInput } = props.comment.fields;

    return (
        <div className="comment">
            <h3>{commentInput}</h3>
            <h4>{usernameInput}</h4>
        </div>
    )
}

export default Comments