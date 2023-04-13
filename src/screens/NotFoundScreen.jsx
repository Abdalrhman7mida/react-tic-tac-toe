import React from "react";
import {Link} from 'react-router-dom'
function NotFoundScreen() {
    return (
        <div className="container text-center">
            <h1 className="display-1 mt-5">Oops!</h1>
            <h2 className="display-4 mb-4">404 - Not Found</h2>
            <p className="lead">The page you are looking for does not exist.</p>
            <Link className="btn btn-primary mt-3" to="/">Go back to home</Link>
        </div>
    )
}
export default NotFoundScreen;