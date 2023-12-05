// Cart.js
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions';

import styles from '../styles/Cart.module.scss';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.books.cart);

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  const handleRemoveFromCart = (bookId) => {
    dispatch(removeFromCart(bookId));
  };

  const totalPrice = cart.reduce((total, item) => total + item.book.price * item.count, 0);

  return (
    <div className={styles.cart}>
      {cart.map(item => (
        <div key={item.book.id} className={styles.cartItem}>
          <h2 className={styles.bookTitle}>{item.book.title}</h2>
          <p className={styles.bookPrice}>${item.book.price}</p>
          <div>
            <button onClick={() => handleRemoveFromCart(item.book.id)}>-</button>
            {item.count}
            <button onClick={() => handleAddToCart(item.book)}>+</button>
          </div>
        </div>
      ))}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;