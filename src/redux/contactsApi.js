import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'redux/userAPI';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery,
  keepUnusedDataFor: 5,
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: data => ({
        url: '/contacts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    editContact: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        console.log(body);
        return {
          url: `/contacts/${id}`,
          method: 'PATCH',
          body: body,
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useEditContactMutation,
} = contactsApi;
