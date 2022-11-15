
const ADD_BOOK = 'redux/books/ADD_BOOK';
const REMOVE_BOOK = 'redux/books/REMOVE_BOOK';

const initialState = [];

// Action part
const addBook =(book) => {
    return {
        type: ADD_BOOK
        item: books
    }
}

cosnt removeBook =(id)=> {
    return {
        type: REMOVE_BOOK,
        id,
    }
}

// Reducer part 
const BooksReducers = (state = initialState, action)=> {
    switch(action.type){
        case ADD_BOOK:
            return [
                ...state,
                action.item.book
            ]
        case REMOVE_BOOK:
            return [
                ...state,
                state.filter((book) => book.id !== action.id)
            ]
        
        default: return state;
    }
}

export default BooksReducers;