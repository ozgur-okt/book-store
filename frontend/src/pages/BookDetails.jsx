import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, fetchBook, removeFromCart } from '../redux/actions';
import { ReactComponent as CartIcon } from '../assets/cart.svg'
import styles from '../styles/pages/BookDetails.module.scss';

function BookDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector(state => state.books.book);
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);
  const cart = useSelector(state => state.books.cart);

  const bookInCart = cart.find(item => item.book.id === parseInt(id));

  useEffect(() => {
    dispatch(fetchBook(id));
  }, [dispatch, id]);

  if (loading || !book) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className={styles.bookDetails}>
      <img src={book.image} alt={book.title} className={styles.bookImage} />
      <div className={styles.information}>
        <h2 className={styles.bookTitle}>{book.title}</h2>
        <p className={styles.bookAuthor}>{book.author}</p>
        <p className={styles.bookPrice}>$ <b>{book.price}</b></p>
        <p className={styles.bookDescription}>{book.description}</p>
        <p className={styles.pageCount}> Page count: {book.pageCount}</p>
        {bookInCart ? (
          <div className={styles.count}>
            <button className={styles.minus} onClick={() => dispatch(removeFromCart(book.id))}>-</button>
            {bookInCart.count}
            <button className={styles.plus} onClick={() => dispatch(addToCart(book))}>+</button>
          </div>
        ) : (
          <button className={styles.cartBtn} onClick={() => dispatch(addToCart(book))} >
            Add to Cart <CartIcon />
          </button>
        )}
      </div>
    </div>
  );
}

export default BookDetails;