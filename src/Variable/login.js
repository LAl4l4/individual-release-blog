import {createSlice} from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkLogin } from '../API/auth';


export const checkLoginThunk = createAsyncThunk(
  'login/checkLogin',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await checkLogin(email, password);

      if (res.data.result === '登录成功') {
        return res.data;
      } else {
        return rejectWithValue(res.data.result);
      }
    } catch (err) {
      return rejectWithValue('网络错误');
    }
  }
);

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: false,
        userId: null,
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(checkLoginThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(checkLoginThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.isLoggedIn = true;
            state.userId = action.payload.userid;
        })
        .addCase(checkLoginThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
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