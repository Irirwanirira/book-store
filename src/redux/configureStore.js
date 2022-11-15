/* eslint-disable import/no-unresolved */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import BooksReducers from './books/Books';
import CategoryReducers from './Categories/categories';

const reducers = combineReducers({
  Books: BooksReducers,
  Category: CategoryReducers,
});

const store = configureStore({ reducer: reducers });

export default store;
