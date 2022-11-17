import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import BooksReducers from './books/books';
import { CategoryReducers } from './Categories/categories';

const reducers = combineReducers({
  Books: BooksReducers,
  Category: CategoryReducers,
});

const Mystore = configureStore({ reducer: reducers }, applyMiddleware(thunk));

export default Mystore;
