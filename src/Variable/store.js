import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { loginSlice } from "./login.js";


const rootReducer = combineReducers({
  login: loginSlice.reducer
});

const store = configureStore({ reducer: rootReducer });


export default store;
