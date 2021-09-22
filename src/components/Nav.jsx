import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    return (
        <nav>
            <Link to="/" className="link">Home </Link>
            <Link to="/new" className="link">Share your tea!</Link>
        </nav>
    )
}