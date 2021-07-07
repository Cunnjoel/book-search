import BookCard from "./components/BookCard";

function Search() {
    return (
        <div>
            <div>
                <h2>
                    Book Search
                </h2>
                <p>
                    book
                </p>
                <input type="text" placeholder="Search.."></input>
            </div>
            <div>
                <h2>
                    Results
                </h2>
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

export default Search;