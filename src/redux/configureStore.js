import { combineReducers, configureStore, } from "@reduxjs/toolkit";
import BooksReducers from "./books/Books";
import CategoryReducers from "./Categories/ategories"

const reducers = combineReducers({
    Books: BooksReducers,
    Category: CategoryReducers,
})

const store  =configureStore({reducer: reducers});

export default StoreConfig;
