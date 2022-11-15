const CHECK_STATE = 'book-store/Categories/CHECK_STATE';

const CATEGORIES = [];

// Action part

const category = () => ({
  type: CHECK_STATE,
});

// Reducers

const CategoryReducers = (state = CATEGORIES, action) => {
  switch (action.type) {
    case CHECK_STATE:
      return 'Underconstruction';
    default: return state;
  }
};
export { category };
export default CategoryReducers;
