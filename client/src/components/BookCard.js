import React from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";

function BookCard(props) {

  const saveBooks = () => {
    axios.post("/api/books", {
      title: props.title,
      authors: props.author,
      description: props.description,
      image: props.image,
      link: props.link
    }).then((book) => {
      // update the allSavedBooks state
      // props.updateSavedBooks(book.data)
      window.alert("Book as been saved successfully!")
    })
  }

  return (
    <div className="card">
      <div>
        <Button href={props.link} variant="outline-dark">View</Button>
        <Button variant="success" onClick={saveBooks} >Save</Button>
      </div>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
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

export default BookCard;
