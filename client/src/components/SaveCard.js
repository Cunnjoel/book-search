import React, { useEffect, useState }  from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import API from "../utils/API"

function SaveCard(props) {
    const [books, setBooks] = useState([])
    useEffect(() => {
        loadBooks()
      }, [])

      function loadBooks() {
        axios.get("/api/books")
          .then(res => 
            setBooks(res.data)
          )
          .catch(err => console.log(err));
      };
      
    function deleteBook(_id) {
        axios.delete("/api/books/" + _id)
          .then(res => loadBooks())
          .catch(err => console.log(err));
      }

  return (
    <div className="card">
        <Button variant="outline-dark" href={props.link}>View</Button>
        <Button variant="outline-dark" onClick={() => deleteBook(props._id)}>Delete</Button>
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