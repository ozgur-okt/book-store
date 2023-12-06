import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, fetchBooks, removeFromCart } from '../redux/actions';
import { ReactComponent as CartIcon } from '../assets/cart.svg'
import upArrow from '../assets/up-arrow.svg';
import styles from '../styles/pages/BookList.module.scss';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.books);
  const cart = useSelector(state => state.books.cart);
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);

  const [searchTerm, setSearchTerm] = useState('');
  const [delayedSearchTerm, setDelayedSearchTerm] = useState('');
  const [showScroll, setShowScroll] = useState(false);


  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    const searchTimer = setTimeout(() => {
      setDelayedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(searchTimer);
    };
  }, [searchTerm]);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(delayedSearchTerm.toLowerCase()));

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <div className={styles.bookList}>
        {filteredBooks.length > 0 ?
          filteredBooks.map(book => {
            const bookInCart = cart.find(item => item.book.id === book.id);
            return (
              <div key={book.id} className={styles.bookCard}>
                <Link to={`/book/${book.id}`} className={styles.link} >
                  <img src={book.image} alt={book.title} className={styles.bookImage} />
                  <h2 className={styles.bookTitle}>{book.title}</h2>
                  <p className={styles.bookAuthor}>{book.author}</p>
                  <p className={styles.bookPrice}>$ {book.price}</p>
                </Link>
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
            );
          })
          : <h2>No books found</h2>}
      </div>
      {showScroll && <button className={styles.scrollTop} onClick={scrollTop}><img src={upArrow} alt='scroll' /></button>}
    </div>
  );
}

export default BookList;