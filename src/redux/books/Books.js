const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/book/REMOVE_BOOK';

const initialState = [
  { Book: 'Last Enemy', author: 'joseph', id: 1 },
  { Book: 'wine and life', author: 'Mark', id: 2 },
  { Book: 'night to forget', author: 'Irirwanirira', id: 3 },
  { Book: 'recursed tannel', author: 'Actrox', id: 4 },
];

// Action part
const addBook = (book) => ({
  type: ADD_BOOK,
  item: book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id: {id},
});

// Reducer part
const BooksReducers = (state = initialState, action) => {
  switch (action.type){
    case ADD_BOOK:
      return [
        ...state,
        action.item.book,
      ];
    case REMOVE_BOOK:
      return [
        state.filter((book) => book.id !== action.id.id),
      ];
    default: return state;
  }
};
export { removeBook, addBook }
export default BooksReducers;
