import { FETCH_BOOKS } from './actions';

const initialState = {
  books: [],
  loading: false,
  error: null,
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        loading: action.status === 'loading',
        books: action.status === 'success' ? action.payload : state.books,
        error: action.status === 'error' ? action.error : null,
      };
    default:
      return state;
  }
};