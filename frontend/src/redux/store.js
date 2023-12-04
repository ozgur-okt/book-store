import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './reducers';

const store = configureStore({
  reducer: {
    books: bookReducer
  }
});

export default store;