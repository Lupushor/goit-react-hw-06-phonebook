import { createReducer } from '@reduxjs/toolkit';
import initialContacts from 'components/contactsData';
import { addContact, deleteContact } from './actions';

// export const contactReduser = createReducer(initialContacts, {
//   ['addContact']: (state, action) => [...state, action.payload],
// });

// export const contactsReducer = (state = initialContacts, action) => {
//   switch (action.type) {
//     case addContact.type:
//       return [...state, action.payload];
//     case deleteContact.type:
//       return state.filter(contact => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

export const contactsReducer = createReducer(initialContacts, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});
