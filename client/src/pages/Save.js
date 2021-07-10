import React from 'react'
import SaveCard from "../components/SaveCard";

function Save(props) {

    return (
        <div>
            <div>
                <h2>
                    Saved Book
                </h2>
            </div>
            <div>
                {props.books.map(book => (
                    <SaveCard
                        id={book.id}
                        key={book.id}
                        title={book.title}
                        author={book.authors}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Save;