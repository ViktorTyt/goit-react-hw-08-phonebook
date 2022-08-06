import { createAction } from '@reduxjs/toolkit';

const addItem = createAction('contacts/addItem');
const deleteItem = createAction('contacts/deleteItem');
const filterItem = createAction('contacts/filterItem');

export { addItem, deleteItem, filterItem };
