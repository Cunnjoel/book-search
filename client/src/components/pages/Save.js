import BookCard from "./components/BookCard";

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
                    <BookCard
                        removeBook={this.removeBook}
                        id={book.id}
                        key={book.id}
                        title={book.title}
                        author={book.author}
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