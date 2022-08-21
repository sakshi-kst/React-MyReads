# MyReads Project

MyReads is a book tracker application where you can shortlist what you want to read from a huge library of books.

Clicking the book opens a popup which displays the book's title, author, cover page and description.

You can keep track of books which you want to read, are currently reading or have completed reading and can move the books from one shelf to another as you proceed with your readings!

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Project Structure

```bash
├── node_modules # Contains all the project dependencies. Not pushed to Git. It is added using `npm install` command.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html # Main HTML code which includes the React app.
|── src
|   ├── icons # Contains the images used in the app
|   │   ├── add.svg
|   │   ├── arrow-back.svg
|   │   └── arrow-drop-down.svg
|   ├── App.css # Styles for the React app
|   ├── App.js # This is the root of the React app.
|   ├── Book.js # Displays a single Book component along with the book details.
|   ├── BookList.js # Displays the three bookshelves and a button to add books to the shelves
|   ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are given below.
|   ├── BookSearch.js # Implements the component which searches for books from the library (BooksAPI)
|   ├── BookShelf.js # Implements the bookshelf component which displays the books on the respective shelf
|   ├── index.css # Global styles
|   └── index.js # Used for DOM rendering
├── .gitignore # Includes files which should not be pushed to Git.
├── package-lock.json # It keeps track of the exact version of every package that is installed for the project
├── package.json # npm package manager file
├── README.md # This file
```

## Backend Server

A backend server is available for fetching the books details. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods we need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms only. That list of terms are the _only_ terms that will work with the backend.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).
