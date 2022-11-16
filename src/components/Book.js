// import { PropTypes } from "prop-types";
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';

/* eslint-disable */

const Book = ({ book }) => {
  const dispatch = useDispatch();
  console.log(book.id)
  return (
    <div key={book.id}>
      <p>Book: { book.Book }</p>
      <p>Author: { book.author }</p>
      <button type="button" onClick={() => dispatch(removeBook(book.id))}>
        Remove Book
      </button>
    </div>
  );
};
export default Book;
