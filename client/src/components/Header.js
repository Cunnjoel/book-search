import React from "react";
import { Link, useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card'

const styles = {
    center: {
        justifyContent: "center"
    }
};

function Header() {
    const location = useLocation();

    return (
        <Card border="dark" style={{ width: '18rem' }}style={styles.center}>
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
        </Card>

    );
}

export default Header;