import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => [...state, payload],
      prepare: data => {
        return { payload: { id: nanoid(), ...data } };
      },
    },
    deleteContact: (_, { payload }) => payload,
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
