import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 异步action：从数据库获取用户数据
export const getUserProfile = createAsyncThunk(
    'profile/getUserProfile',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                'http://localhost:8080/api/user/profile',
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true // 发送cookies
                }
            );

            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        userData: {
            id: null,
            username: '',
            email: '',
            nickname: '',
            avatar: '',
            bio: ''
        },
        loading: false,
        error: null
    },
    reducers: {
        clearProfile(state) {
            state.userData = {
                id: null,
                username: '',
                email: '',
                nickname: '',
                avatar: '',
                bio: ''
            };
            state.error = null;
        },
        updateUserData(state, action) {
            state.userData = { ...state.userData, ...action.payload };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUserProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload;
            })
            .addCase(getUserProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { clearProfile, updateUserData } = profileSlice.actions;

export const selectUserData = (state) => state.profile.userData;
export const selectProfileLoading = (state) => state.profile.loading;
export const selectProfileError = (state) => state.profile.error;
