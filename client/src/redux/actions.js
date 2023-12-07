export const FETCH_BOOKS = 'FETCH_BOOKS'
export const FETCH_BOOK = 'FETCH_BOOK'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'

const BASE_URL = 'http://localhost:5000'

export const fetchBooks = () => async dispatch => {
  dispatch({ type: FETCH_BOOKS, status: 'loading' })
  try {
    const response = await fetch(`${BASE_URL}/api/books`)
    if (!response.ok) {
      throw new Error('Failed to fetch books')
    }
    const books = await response.json()
    dispatch({ type: FETCH_BOOKS, status: 'success', payload: books })
  } catch (error) {
    dispatch({ type: FETCH_BOOKS, status: 'error', error: error.message })
  }
}

export const fetchBook = (id) => async dispatch => {
  dispatch({ type: FETCH_BOOK, status: 'loading' })
  try {
    const response = await fetch(`${BASE_URL}/api/books/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch book')
    }
    const book = await response.json()
    dispatch({ type: FETCH_BOOK, status: 'success', payload: book })
  } catch (error) {
    dispatch({ type: FETCH_BOOK, status: 'error', error: error.message })
  }
}

export const addToCart = (book) => ({
  type: ADD_TO_CART,
  payload: book
})

export const removeFromCart = (bookId) => ({
  type: REMOVE_FROM_CART,
  payload: bookId
})

export const clearCart = () => ({
  type: CLEAR_CART
})