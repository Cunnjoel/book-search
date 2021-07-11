import React from "react";
import Button from 'react-bootstrap/Button';


function SaveCard(props) {

    return (
        <div className="card">
            <Button variant="outline-dark" href={props.link}>View</Button>
            <Button variant="outline-dark" onClick={() => props.deleteBook(props.id)}>Delete</Button>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Title:</strong>{props.title}
                    </li>
                    <li>
                        <strong>Author:</strong> {props.author}
                    </li>
                    <li>
                        <strong>Description:</strong> {props.description}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SaveCard;