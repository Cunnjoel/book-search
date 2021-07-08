import React from 'react'
import SaveCard from "../components/BookCard";

function Save() {
    return (
        <div>
            <div>
                <h2>
                    Saved Book
                </h2>
            </div>
            <div>
                {this.state.books.map(book => (
                    <SaveCard
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

export default Save;