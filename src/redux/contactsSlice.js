import { createSlice } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSwaggerApi';

const initialState = { contacts: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      contactsApi.endpoints.getContacts.matchFulfilled,
      (state, { payload }) => {
        state.contacts = payload;
      }
    );
  },
});

export const { filterItem } = contactsSlice.actions;
export default contactsSlice.reducer;
