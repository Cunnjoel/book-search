import React, { useState, useEffect, useRef } from 'react'
import BookCard from "../components/BookCard";
import API from "../utils/API"

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
            <div>
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
            </div>
            <div>
                <h2>
                    Results
                </h2>
                {books.map(book => (
                    <BookCard
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