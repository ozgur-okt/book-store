import { ADD_TO_CART, CLEAR_CART, FETCH_BOOK, FETCH_BOOKS, REMOVE_FROM_CART } from './actions';

const initialState = {
  books: [],
  book: null,
  cart: [],
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
    case FETCH_BOOK:
      return {
        ...state,
        loading: action.status === 'loading',
        book: action.status === 'success' ? action.payload : state.book,
        error: action.status === 'error' ? action.error : null,
      };
    case ADD_TO_CART: {
      const updatedCart = state.cart.map(item => {
        if (item.book.id === action.payload.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });

      if (!updatedCart.find(item => item.book.id === action.payload.id)) {
        updatedCart.push({ book: action.payload, count: 1 });
      }

      return { ...state, cart: updatedCart };
    }
    case REMOVE_FROM_CART: {
      let updatedCart = state.cart.map(item => {
        if (item.book.id === action.payload) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });

      updatedCart = updatedCart.filter(item => item.count > 0);

      return { ...state, cart: updatedCart };
    }
    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
};