import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { pullProfiles } from '../API/pullprof';
import { logOut } from './login';

// 异步action：从数据库获取用户数据
export const getUserProfile = createAsyncThunk(
    'profile/getUserProfile',
    async (_, { rejectWithValue }) => {
        try {
            const response = await pullProfiles();//通过id拉取

            //这里做错误handle

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
            bio: '',
            avatar: '',
            birthday: '',
            gender: ''
        },
        loading: false,
        error: null
    },
    reducers: {
        clearProfile(state) {
            state.userData = {
                id: null,
                bio: '',
                avatar: '',
                birthday: '',
                gender: ''
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
                const { id, bio, avatarUrl, birthday, gender } = action.payload;
                state.userData = {
                    id,
                    bio,
                    avatar: avatarUrl,
                    birthday,
                    gender
                };
            })
            .addCase(getUserProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            //监听logout action，清空profile
            .addCase(logOut, (state) => {
                state.userData = {
                    id: null,
                    bio: '',
                    avatar: '',
                    birthday: '',
                    gender: ''
                };
                state.error = null;
            });
    }
});

export const { clearProfile, updateUserData } = profileSlice.actions;

export const selectUserData = (state) => state.profile.userData;
export const selectProfileLoading = (state) => state.profile.loading;
export const selectProfileError = (state) => state.profile.error;
