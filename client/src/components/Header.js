import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();

    return (
        <div>
            <ul>
                <li>
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Search
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/save"
                        className={location.pathname === "/save" ? "nav-link active" : "nav-link"}
                    >
                        Save
                    </Link>
                </li>
            </ul>
            <div>
                <h1>
                    (React) Google Books Search
                </h1>
                <p>
                    Search for and Save Books of Interest
                </p>
            </div>
        </div>

    );
}

export default Header;