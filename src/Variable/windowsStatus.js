import { createSlice } from "@reduxjs/toolkit";


// slice for which top-level page/view is showing
export const uiSlice = createSlice({
  name: 'ui',
  initialState: { pageState: 'front' },
  reducers: {
    setPageState(state, action) {
      state.pageState = String(action.payload);
    },
    showFront(state) { state.pageState = 'front' },
    showContent(state) { state.pageState = 'content' },
    showLogin(state) { state.pageState = 'login' }
  }
});

export const {
  setPageState, showFront, showContent, showLogin
} = uiSlice.actions;

export const selectPageState = (state) => state.ui.pageState;