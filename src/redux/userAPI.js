import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    login: builder.mutation({
      query: payload => ({
        url: '/users/login',
        method: 'POST',
        body: payload,
      }),
      providesTags: ['Users'],
    }),
  }),
});

export const { useLoginMutation } = userApi;
