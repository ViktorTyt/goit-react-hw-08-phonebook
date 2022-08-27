import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { REHYDRATE } from 'redux-persist';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().users.token;

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload[reducerPath];
    }
  },
  keepUnusedDataFor: 5,
  tagTypes: ['Users'],
  endpoints: builder => ({
    registrer: builder.mutation({
      query: payload => ({
        url: '/users/signup',
        method: 'POST',
        body: payload,
      }),
    }),
    login: builder.mutation({
      query: payload => ({
        url: '/users/login',
        method: 'POST',
        body: payload,
      }),
      providesTags: ['Users'],
    }),
    currentUser: builder.query({
      query: () => '/users/current',
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useRegistrerMutation,
  useLoginMutation,
  useCurrentUserQuery,
  useLogoutMutation,
} = userApi;
