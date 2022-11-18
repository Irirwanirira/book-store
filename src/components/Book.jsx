import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Book.css';
/* eslint-disable */

const Book = (book) => {
  const dispatch = useDispatch();
  const { id, author, title, category } = book;

  const handleDelte = () => {
    dispatch(removeBook(id));
  };

  const Chapter = Math.round(Math.random() * 10);

  return (
    <div className="card">
      <div className="dynamic-part">
        <p className="category">{category}</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <div className="button-d">
          <button type="button" className="button-click">
            Comments
          </button>
          |
          <button type="button" className="button-click" onClick={handleDelte}>
            Remove Book
          </button>
          |
          <button type="button" className="button-click">
            Edit
          </button>
        </div>
      </div>

      <div className="static-part">
        <div>
          <div style={{ width: 90, height: 90 }}>
            <CircularProgressbar value={Math.round((Chapter / 10) * 100)} />
          </div>
        </div>
        <div>
          <p className="percentage_value">
            {Math.round((Chapter / 10) * 100)}%
          </p>
          <p className="completed">Completed</p>
        </div>
        <div>
          <div className="last_column">
            <p className="current-chapter">CURRENT CHAPTER</p>
            <p id="chapter">Chapter {Chapter}</p>
            <button type="button" id="UPDATE-PROGRESS">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Book;
