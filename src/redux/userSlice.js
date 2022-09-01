import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userAPI';
import { contactsApi } from './contactsApi';

const initialState = {
  name: '',
  email: '',
  token: '',
  isLoggedIn: false,
  userContacts: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        userApi.endpoints.registrer.matchFulfilled,
        (state, { payload }) => {
          state.name = payload.user.name;
          state.email = payload.user.email;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        userApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.name = payload.user.name;
          state.email = payload.user.email;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        userApi.endpoints.currentUser.matchRejected,
        (state, { payload }) => {
          if (payload?.status === 401) {
            state.token = '';
          }
        }
      )
      .addMatcher(
        userApi.endpoints.currentUser.matchFulfilled,
        (state, { payload }) => {
          state.name = payload.name;
          state.email = payload.email;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        userApi.endpoints.logout.matchFulfilled,
        (state, { payload }) => {
          state.token = '';
          state.isLoggedIn = false;
          state.userContacts = null;
        }
      )
      .addMatcher(
        contactsApi.endpoints.getContacts.matchFulfilled,
        (state, { payload }) => {
          state.userContacts = payload;
        }
      );
  },
});

export const { loginSuccess, getCurrentSuccess } = userSlice.actions;
export default userSlice.reducer;
