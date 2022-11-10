import React from 'react';
/* eslint-disable */ 
import PropTypes from 'prop-types';

const Book = ({ book }) =>

  <div>
    <p>Title: {book.Book}</p>
        <p>Author: {book.author}</p>
  </div>



Book.propTypes = {
  book: PropTypes.object
};

export default Book;
