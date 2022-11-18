import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (book) => {
  const dispatch = useDispatch();
  const {
    id, author, title, category,
  } = book;

  const handleDelte = () => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <p>
        Book:
        {title}
      </p>
      <p>
        Author:
        {author}
      </p>
      <p>
        category:
        {category}
      </p>
      <button type="button" onClick={handleDelte}>
        Remove Book
      </button>
    </div>
  );
};
export default Book;
