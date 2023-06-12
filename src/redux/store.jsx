// import initialContacts from 'components/contactsData';
// // import { devToolsEnhancer } from '@redux-devtools/extension';
// // import { createStore } from 'redux';
// import { statusFilters } from './constants';
// // import { configure } from '@testing-library/react';
// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice';
// import { getFilterContact } from './filterSlice';

// const rootReducer = (state = initialContacts, action) => {
//   switch (action.type) {
//     case 'addContact':
//       return [...state, action.payload];
//     case 'deleteContact':
//       return state.filter(contact => contact.id !== action.payload);

//     default:
//       break;
//   }
//   return state;
// };

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // const enhancer = devToolsEnhancer();

// // export const store = createStore(rootReducer, enhancer);

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: getFilterContact,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer, getFilterContacts } from './filterSlice';
import { persistStore } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: getFilterContacts },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
