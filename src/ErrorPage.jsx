import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <>
        <p>are you trying to break my app?</p>
        <Link to={"/"}>Go to home</Link>
        </>
    )
}

export default ErrorPage;