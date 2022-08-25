import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userAPI';

const initialState = { name: '', email: '', token: '' };

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginSuccess: (state, { payload }) => {
      state.name = payload.user.name;
      state.email = payload.user.email;
      state.token = payload.user.token;
    },
    getCurrentSuccess: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.name = payload.user.name;
        state.email = payload.user.email;
        state.token = payload.token;
      }
    );
  },
});

export const { loginSuccess, getCurrentSuccess } = userSlice.actions;
export default userSlice.reducer;
