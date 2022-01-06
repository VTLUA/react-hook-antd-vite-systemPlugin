import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./feature/userSlice";

const reducer = combineReducers({
    user: userReducer
});

export default configureStore({
    reducer,
});
