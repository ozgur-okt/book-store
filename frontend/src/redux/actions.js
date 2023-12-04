export const FETCH_BOOKS = 'FETCH_BOOKS';

export const fetchBooks = () => async dispatch => {
  dispatch({ type: FETCH_BOOKS, status: 'loading' });

  try {
    const response = await fetch('http://localhost:5000/api/books');
    const books = await response.json();
    console.log(books);

    dispatch({ type: FETCH_BOOKS, status: 'success', payload: books });
  } catch (error) {
    dispatch({ type: FETCH_BOOKS, status: 'error', error });
  }
};