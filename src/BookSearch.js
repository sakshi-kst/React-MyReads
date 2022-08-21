import { useState } from "react";
import { Link } from 'react-router-dom';
import Book from './Book';

function BookSearch(props) {
    const {books, searchedBooks, onMove, onSearch, onResetSearch} = props;
    const [query, setQuery] = useState('');

    const updateQuery = (query) => {
        query = query.trimStart();
        setQuery(query);
        onSearch(query);
    }

    const searchedBooksWithShelf = searchedBooks.map(searchedBook => {
        books.map(book => {
        if(searchedBook.id === book.id) {
            searchedBook.shelf = book.shelf;
        }
        return book;
        })
        return searchedBook;
    })

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                className="close-search"
                to="/"
                onClick = {onResetSearch}
                >
                Close
                </Link>

                <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search books by title or author"
                    value = {query}
                    onChange = {(event) => updateQuery(event.target.value)}
                />
                </div>
            </div>

            <div className="search-books-results">
                <ol className="books-grid">
                {
                    (searchedBooks.length > 0) ? (
                    searchedBooksWithShelf.map(book => (
                        <li key={book.id}>
                        <Book book={book} onMove = {onMove} />
                        </li>
                    ))
                    ) : (query !== '') ? <li>
                        <h2>Oops! No books match your input</h2>
                        <h3>Please update the query</h3>
                        </li> : <li></li>
                }
                </ol>
            </div>
        </div>
    );
}

export default BookSearch;