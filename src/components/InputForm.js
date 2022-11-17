import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

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
    <div>
      <form onSubmit ={createNewBook}>
      <input type="text" name="Book" placeholder="Book" required value={title} onChange={BookInput}/><br/>
        <input type="text" name="author" placeholder="Written By" required value={author} onChange={authorInput}/><br/>
        <select name="category" id="category" onChange={anyName}>
          <option>Action</option>
          <option>Romance</option>
          <option>Commedy</option>
          <option>Adventure</option>
          <option> Horror</option>
          <option>Crime</option>
          <option>Thriller</option>
          <option>Drama</option>
        </select>
        <button type="submit">Add Book</button><br/>
      </form>
    </div>
  );
};
export default InputBooks;
