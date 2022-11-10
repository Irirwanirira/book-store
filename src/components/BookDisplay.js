import React, { useState } from 'react';
import Book from './Book';
import InputBooks from './InputForm';

const BookDisplay = () => {
  const [ books ] = useState([
    { Book: 'Last Enemy', author: 'joseph', id: 1 },
    { Book: 'wine and life', author: 'Mark', id: 2 },
    { Book: 'night to forget', author: 'Irirwanirira', id: 3 },
    { Book: 'recursed tannel', author: 'Actrox', id: 4 },
  ]);
  return (
    <div>
      {books.map((book) => (
        <div key={book.id} className="bookCard">
          <Book book={book} />
          <button type="button"> Delete</button>
        </div>
      ))}
      <InputBooks />
    </div>
  );
};

export default BookDisplay;
