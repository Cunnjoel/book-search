import React from "react";
import Button from 'react-bootstrap/Button';

function SaveCard(props) {
  return (
    <div className="card">
        <Button variant="outline-dark">View</Button>
        <Button variant="outline-dark">Delete</Button>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> <a href={props.link}>{props.title}</a>
          </li>
          <li>
            <strong>Author:</strong> {props.author}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default SaveCard;