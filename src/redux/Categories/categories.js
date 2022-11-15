const MarkCategory = 'redux/category';

const CATEGORIES = [];

// Action part

const category = () => ({
  type: MarkCategory,
});
category();

// Reducers

const CategoryReducers = (state = CATEGORIES, action) => {
  switch (action.type) {
    case MarkCategory:
      return [
        ...state,
        'Underconstruction',
      ];
    default: return state;
  }
};

export default CategoryReducers;
