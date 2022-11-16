const CHECK_STATUS = "book-store/Categories/CHECK_STATE";

const CATEGORIES = [];

// Action part

export const category = () => ({
  type: CHECK_STATUS,
});

// Reducers

export const CategoryReducers = (state = CATEGORIES, action) => {
  switch (action.type){
    case CHECK_STATUS:
      return "Under construction";
    default:
      return state;
  }
};
export default CategoryReducers;
