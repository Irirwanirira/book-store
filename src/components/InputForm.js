/* eslint-disable */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/Books';

const InputBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const createNewBook = (e) => {
    e.preventDefault() 
    const newBook ={
      title,
      author,
      id: uuidv4()
    }
    dispatch(addBook(newBook))
    setTitle("")
    setAuthor("")
  }

  const titleInput = (e) => {
    setTitle(e.target.value)
  }

  const authorInput=(e)=> {
    setAuthor(e.target.value)
  }

  return (
    <div>
      <form onSubmit ={createNewBook}>
      <input type="text" name="book" placeholder="Book" value={title} onChange={titleInput}/><br/>
        <input type="text" name="author" placeholder="Written By" value={author} onChange={authorInput}/><br/>
        <button type="submit">Add Book</button> <br/>
      </form>
    </div>
  );
};
export default InputBooks;
