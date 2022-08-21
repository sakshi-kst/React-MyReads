import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

const bookShelvesList = [
    {'name': 'Currently Reading', 'key': 'currentlyReading'},
    {'name': 'Want to Read', 'key': 'wantToRead'},
    {'name': 'Completed', 'key': 'read'}
];

function BookList(props) {
    const {books, onMove} = props;

    return (
        <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                {
                    bookShelvesList.map(bookShelf => {
                        return <BookShelf key = {bookShelf.key} shelf = {bookShelf} books = {books} onMove = {onMove} />
                    })
                }
            </div>
        </div>
        <div className="open-search">
            <Link to = '/search'>
                Add a Book
            </Link>
        </div>
        </div>
    );
}

export default BookList;