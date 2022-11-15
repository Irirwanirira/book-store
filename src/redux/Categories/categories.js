const Mark_Category = 'redux/category'

const CATEGORIES  = [];

// Action part 

const category = ()=> {
    return {
        type: Mark_Category
    }
},

// Reducers

const CategoryReducers = (state = CATEGORIES, action) => {
    switch(action.type){
        case Mark_Category:
            return [
                ...state,
                Under construction
            ];
        default return state;
    }
};

export default CategoryReducers;
