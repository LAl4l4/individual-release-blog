import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pageSlice from "/pagenum.js";
import uiSlice from "/windowsStatus.js";


const rootReducer = combineReducers({
  page: pageSlice.reducer,
  ui: uiSlice.reducer
});

const store = configureStore({ reducer: rootReducer });


export default store;
