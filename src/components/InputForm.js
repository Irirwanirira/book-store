/* eslint-disable */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const InputBooks = () => {
  const [Book, setBook] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const createNewBook = (e) => {
    e.preventDefault() 
    const newBook ={
      Book: Book,
      author: author,
      id: uuidv4()
    }
    
    dispatch(addBook(newBook))
    setBook("");
    setAuthor("");
  }

  const BookInput = (e) => {
    setBook(e.target.value)
  }

  const authorInput=(e)=> {
    setAuthor(e.target.value)
  }

  return (
    <div>
      <form onSubmit ={createNewBook}>
      <input type="text" name="Book" placeholder="Book" required value={Book} onChange={BookInput}/><br/>
        <input type="text" name="author" placeholder="Written By" required value={author} onChange={authorInput}/><br/>
        <button type="submit">Add Book</button> <br/>
      </form>
    </div>
  );
};
export default InputBooks;
