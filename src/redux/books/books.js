import { createAsyncThunk } from "@reduxjs/toolkit";
const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/book/REMOVE_BOOK';
const GET_BOOK = 'book-store/book/GET_BOOK';

const initialState = [];
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CiVzFjRCHHFt7CY44cC4/books'

// Reducer part
const BooksReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK:
      return action.ITEM;

    case ADD_BOOK:
      return [
        ...state,
        action.item,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.itemB.id);
    default: return state;
  }
};

// Action part

const getBook = createAsyncThunk(GET_BOOK, async (post, {dispatch}) => {
  const resp = await fetch(url);
  const data = await resp.json();
  const books = Object.keys(data).map((key) => ({
    ...data[key][0],
    item_id: key,
  }));
  dispatch({
    type: GET_BOOK,
    ITEM: books,
  });
});

const addBook = createAsyncThunk(ADD_BOOK, async (book, { dispatch }) => {
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(book),
  });
 dispatch({
    type: ADD_BOOK,
    item: book,
  });
});

const removeBook = createAsyncThunk(REMOVE_BOOK, async (id, { dispatch }) =>{
  await fetch (`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CiVzFjRCHHFt7CY44cC4/books/${id}`, {
    method: 'DELETE',
  });
  dispatch({
    type: REMOVE_BOOK,
    itemB: { id },
  });
});
export { removeBook, addBook, getBook };
export default BooksReducers;
