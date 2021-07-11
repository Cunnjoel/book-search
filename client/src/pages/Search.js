import React, { useState, useEffect, useRef } from 'react'
import BookCard from "../components/BookCard";
import API from "../utils/API"
import Card from 'react-bootstrap/Card'

const styles = {
    center: {
        justifyContent: "center",
        textAlign: "center"
    },
    color: {
        color: "white"
    }
};

function Search(props) {

    const [books, setBooks] = useState([])
    const query = useRef(null)
    const getBooks = async () => {
        console.log(query.current.value)
        try {
            const search = await API.search(query.current.value)
            console.log(search)
            setBooks(search.data.items)
        } catch (err) { console.log(err) }


    }
    return (
        <div>
            <Card border="dark" style={{ width: '18rem' }} style={styles.center}>
                <h2>
                    Book Search
                </h2>
                <p>
                    book
                </p>
                <form>
                    <input
                        ref={query}
                        name="query"
                        placeholder="Search"
                    />
                    <button
                        onClick={getBooks}
                        type="button"
                    >Search</button>
                </form>
            </Card>
            <div>
                <h2 style={styles.color}>
                    Results
                </h2>
                {books.map(book => (
                    <BookCard
                    // updateSavedBooks
                        // removeBook={this.removeBook}
                        id={book.id}
                        key={book.id}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        image={book.volumeInfo.imageLinks.smallThumbnail}
                        link={book.saleInfo.buyLink}
                    />
                ))}
            </div>
        </div>
    )
}

export default Search;