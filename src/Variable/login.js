import {createSlice} from '@reduxjs/toolkit';


export const loginSlice = createSlice({
    name: 'login',
    initialState: { isLoggedIn: false },
    reducers: {
        logIn(state) {
            state.isLoggedIn = true;
        },
        logOut(state) {
            state.isLoggedIn = false;
        },
        //这里存储id
        storeUserId(state, action) {
            state.userId = action.payload;
        }
    }
});

export const { logIn, logOut, storeUserId } = loginSlice.actions;

export const selectIsLoggedIn = (state) => state.login.isLoggedIn;
export const selectUserId = (state) => state.login.userId;