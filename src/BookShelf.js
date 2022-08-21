import Book from './Book';

function BookShelf(props) {
    const {shelf, books, onMove} = props;
    const booksOnThisShelf = books.filter(book => book.shelf === shelf.key);

    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    booksOnThisShelf.map(book => (
                    <li key={book.id}>
                        <Book book={book} onMove = {onMove} />
                    </li>
                    ))
                }
            </ol>
        </div>
        </div>
    );
}

export default BookShelf;