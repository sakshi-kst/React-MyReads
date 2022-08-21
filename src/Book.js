import { useState } from "react";
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';

function Book(props) {
    const {book, onMove} = props;
    const [showBookDesc, setShowBookDesc] = useState(false);
    
    const handleChange = (event) => {
      onMove(book, event.target.value);
    };
  
    return (
      <div className="book">
        <MouseParallaxContainer>
          <MouseParallaxChild factorX={0.03} factorY={0.05} >
            <div className="book-top">
              <div
                className="book-cover"
                onClick = {() => setShowBookDesc(true)}
                style={{
                  cursor: 'pointer',
                  width: 128,
                  height: 192,
                  backgroundImage:
                    `url(${book.imageLinks ?
                        book.imageLinks.thumbnail :
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrlF_KqvciTA685q2MzXhl0LOAjtWDwZg8A&usqp=CAU'
                    })`,
                }}
              />

              {
                showBookDesc && <div>
                  <Lightbox
                    mainSrc = {book.imageLinks ? book.imageLinks.thumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrlF_KqvciTA685q2MzXhl0LOAjtWDwZg8A&usqp=CAU'}
                    onCloseRequest = {() => setShowBookDesc(false)}
                    imageTitle = {book.title +  ' by ' + (book.authors ? book.authors.join(', ') : 'Anonymous')}
                    imageCaption = {book.description}
                  />
                </div>
              }

              <div className="book-shelf-changer">
                <select value={book.shelf ? book.shelf : 'none'} onChange={handleChange} >
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Completed</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>

            <div className="book-title">
              {book.title}
            </div>

            <div className="book-authors">
              {book.authors ? book.authors.join(', ') : 'Anonymous'}
            </div>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    );
}

export default Book;