// import { PropTypes } from "prop-types";
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';

/* eslint-disable */

const Book = (book) => {
  const dispatch = useDispatch();
  const { id, author, Book } = book;

  const handleDelte = () => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <p>Book: {Book}</p>
      <p>Author: {author}</p>
      <button type='button' onClick={handleDelte}>
        Remove Book
      </button>
    </div>
  );
};
export default Book;
