const ADD_BOOK = 'redux/books/ADD_BOOK';
const REMOVE_BOOK = 'redux/books/REMOVE_BOOK';

const initialState = [];

// Action part
const addBook = (book) => ({
  type: ADD_BOOK,
  item: book,
});
addBook();

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
removeBook();

// Reducer part
const BooksReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.item.book,
      ];
    case REMOVE_BOOK:
      return [
        ...state,
        state.filter((book) => book.id !== action.id),
      ];

    default: return state;
  }
};

export default BooksReducers;