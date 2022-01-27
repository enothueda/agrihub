import CATEGORIES from "./categories";

const INITIAL_STATE = {
    sections: CATEGORIES
}

const directoryReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {        
        default:
            return state;
    }
}

export default directoryReducer;