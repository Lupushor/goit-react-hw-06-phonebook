import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialContacts from 'components/contactsData';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return { payload: { id: nanoid(), ...text } };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
const persistConfig = { key: 'root', storage };
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// const contactsSlice = createSlice({
//   // Имя слайса
//   name: 'contacts',
//   // Начальное состояние редюсера слайса
//   initialState: { contacts: [] },
//   // Объект редюсеров
//   reducers: {
//     addContact(state, action) {
//       state.contacts.push(action.payload);
//     },
//     deleteContact(state, action) {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//   },
// });

// // Генераторы экшенов
// const { addContact, deleteContact } = contactsSlice.actions;
// // Редюсер слайса
// const contactsReducer = contactsSlice.reducer;
