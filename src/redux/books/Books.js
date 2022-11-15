const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/book/REMOVE_BOOK';

const initialState = [];

// Action part
const addBook = (book) => ({
  type: ADD_BOOK,
  item: book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

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
        state.filter((book) => book.id !== action.id),
      ];

    default: return state;
  }
};
export { addBook, removeBook };
export default BooksReducers;
