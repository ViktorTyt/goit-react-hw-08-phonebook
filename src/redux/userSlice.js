import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userAPI';
import { contactsApi } from './contactsApi';

const initialState = { name: '', email: '', token: '', userContacts: null };

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // loginSuccess: (state, { payload }) => {
    //   state.name = payload.user.name;
    //   state.email = payload.user.email;
    //   state.token = payload.user.token;
    // },
    // getCurrentSuccess: (state, { payload }) => {
    //   state.name = payload.name;
    //   state.email = payload.email;
    // },
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        userApi.endpoints.registrer.matchFulfilled,
        (state, { payload }) => {
          state.name = payload.user.name;
          state.email = payload.user.email;
          state.token = payload.token;
        }
      )
      .addMatcher(
        userApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.name = payload.user.name;
          state.email = payload.user.email;
          state.token = payload.token;
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
        }
      )
      .addMatcher(
        userApi.endpoints.logout.matchFulfilled,
        (state, { payload }) => {
          state.token = '';
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
