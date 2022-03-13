import { DirectoryActionTypes } from "./directory.types";

export const setMainRoute = routeName => ({
    type: DirectoryActionTypes.SET_MAIN_ROUTE,
    payload: routeName
});

export const clearMainRoute = () => ({
    type: DirectoryActionTypes.CLEAR_MAIN_ROUTE
})