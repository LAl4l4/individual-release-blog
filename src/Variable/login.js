import {createSlice} from '@reduxjs/toolkit';



export const loginSlice = createSlice({
    name: 'login',
    initialState: { isLoggedIn: false, userEmail: '' },
    reducers: {
        logIn(state, action) {
            state.isLoggedIn = true;
            state.userEmail = String(action.payload);
        },
        logOut(state) {
            state.isLoggedIn = false;
            state.userEmail = '';
        }
    }
});

export const { logIn, logOut } = loginSlice.actions;

export const selectIsLoggedIn = (state) => state.login.isLoggedIn;
export const selectUserEmail = (state) => state.login.userEmail;