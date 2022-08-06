import { createAction } from '@reduxjs/toolkit';

const addItem = createAction('items/addItem');
const deleteItem = createAction('items/deleteItem');
const filterItem = createAction('filter/filterItem');
console.log(addItem.type);
export { addItem, deleteItem, filterItem };
