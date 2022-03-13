import CATEGORIES from "./categories";
import BITACORAS from "./bitacoras";

import { DirectoryActionTypes } from "./directory.types";

const INITIAL_STATE = {
    sections: CATEGORIES,
    bitacoras: BITACORAS,
    mainRoute: null
}

const directoryReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {      
        case DirectoryActionTypes.SET_MAIN_ROUTE:
            return {
                ...state,
                mainRoute: action.payload
            }
        case DirectoryActionTypes.CLEAR_MAIN_ROUTE:
            return {
                ...state,
                mainRoute: null
            }
        default:
            return state;
    }
}

export default directoryReducer;