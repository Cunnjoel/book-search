import React, { useEffect, useState } from 'react'
import SaveCard from "../components/SaveCard";
import axios from "axios";
import API from "../utils/API"

function Save(props) {

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
        <div>
            <div>
                <h2>
                    Saved Book
                </h2>
            </div>
            <div>
                {books.map(book => (
                    <SaveCard
                        id={book._id}
                        key={book._id}
                        title={book.title}
                        author={book.authors}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                        deleteBook={deleteBook}
                    />
                ))}
            </div>
        </div>
    )
}

export default Save;