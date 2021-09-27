import "./Comments.css";

const Comments = (props) => {
    const { commentInput , usernameInput } = props.comment.fields;

    return (
        <div className="comment">
            <h3>posted by: {usernameInput}</h3>
            <h4>{commentInput}</h4>
        </div>
    )
}

export default Comments