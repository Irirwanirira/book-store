import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import './inputForm.css';

const InputBooks = () => {
  const [title, settitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const createNewBook = (e) => {
    e.preventDefault();

    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };

    dispatch(addBook(newBook));
    settitle('');
    setAuthor('');
  };

  const BookInput = (e) => {
    settitle(e.target.value);
  };

  const authorInput = (e) => {
    setAuthor(e.target.value);
  };

  const anyName = (e) => {
    setCategory(e.target.value);
  };

  return (
    <footer className="footer">
      <h1 id="add-book">ADD NEW BOOK</h1>
      <form className='form' onSubmit={createNewBook}>
        <input type="text" name="Book" placeholder="Book title" required value={title} onChange={BookInput} />
        <br />
        <input type="text" name="author" placeholder="Written By" required value={author} onChange={authorInput} />
        <br />
        <select name="category" id="category" onChange={anyName} className="d-option">
          <option>Category</option>
          <option>Action</option>
          <option>Romance</option>
          <option>Commedy</option>
          <option>Adventure</option>
          <option> Horror</option>
          <option>Crime</option>
          <option>Thriller</option>
          <option>Drama</option>
        </select>
        <button type="submit" className="addBook">Add Book</button>
        <br />
      </form>
    </footer>
  );
};
export default InputBooks;
