import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, fetchBooks, removeFromCart } from '../redux/actions';
import { ReactComponent as CartIcon } from '../assets/cart.svg'
import styles from '../styles/BookList.module.scss';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.books);
  const cart = useSelector(state => state.books.cart);
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);

  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  const handleRemoveFromCart = (bookId) => {
    dispatch(removeFromCart(bookId));
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <div className={styles.bookList}>
        {books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase())).map(book => {
          const cartItem = cart.find(item => item.book.id === book.id);

          return (
            <div key={book.id} className={styles.bookCard}>
              <Link to={`/book/${book.id}`} className={styles.link} >
                <img src={book.image} alt={book.title} className={styles.bookImage} />
                <h2 className={styles.bookTitle}>{book.title}</h2>
                <p className={styles.bookAuthor}>{book.author}</p>
                <p className={styles.bookPrice}>${book.price}</p>
              </Link>
              {cartItem ? (
                <div className={styles.count}>
                  <button className={styles.minus} onClick={() => handleRemoveFromCart(book.id)}>-</button>
                  {cartItem.count}
                  <button className={styles.plus} onClick={() => handleAddToCart(book)}>+</button>
                </div>
              ) : (
                <button className={styles.cartBtn} onClick={() => handleAddToCart(book)} >
                  Add to Cart <CartIcon />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookList;