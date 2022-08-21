import { useEffect } from 'react';
import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import * as BooksAPI from './BooksAPI';
import BookList from './BookList';
import BookSearch from './BookSearch';

function App() {
  const [books, setBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
    .then((books) => {
      setBooks(books)
    })
  });
  
  const moveBook = (bookToBeMoved, shelf) => {
    const movedBooks = books.map(book => {
      if (book.id === bookToBeMoved.id) {
        book.shelf = shelf;
      }
      BooksAPI.update(bookToBeMoved, shelf);
      return book;
    });
    setBooks(movedBooks);
  };

  const searchBooks = (query) => {
    BooksAPI.search(query)
      .then((books) => {
        if (query === '' || books.error) {
          setSearchedBooks([]);
        } else {
          setSearchedBooks(books);
        }
    });
  }

  const resetSearch = () => {
    setSearchedBooks([]);
  }

  return (
    <div className="app">
      <Routes>
        <Route
          exact path='/'
          element = {
            <BookList
              books = {books}
              onMove = {moveBook}
            />
          }
        />
        <Route
          path='/search'
          element = {
            <BookSearch
              books = {books}
              searchedBooks = {searchedBooks}
              onMove = {moveBook}
              onSearch = {searchBooks}
              onResetSearch = {resetSearch}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;