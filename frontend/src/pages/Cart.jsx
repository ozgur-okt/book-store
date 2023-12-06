import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, removeFromCart } from '../redux/actions';
import PaymentForm from '../components/PaymentForm'
import styles from '../styles/pages/Cart.module.scss';


function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.books.cart);
  const [checkout, setCheckout] = useState(false);

  const totalPrice = cart.reduce((total, item) => total + item.book.price * item.count, 0);

  return (
    <div className={styles.cart}>
      {!cart.length && <p className={styles.empty}>Your cart is empty</p>}
      {cart.map(item => (
        <div key={item.book.id} className={styles.cartItem}>
          <img src={item.book.image} alt={item.book.title} />
          <h2 className={styles.bookTitle}>{item.book.title}</h2>
          <p className={styles.bookAuthor}>{item.book.author}</p>
          <p className={styles.bookPrice}>${item.book.price}</p>
          <div className={styles.count}>
            <button className={styles.minus} onClick={() => dispatch(removeFromCart(item.book.id))}>-</button>
            {item.count}
            <button className={styles.plus} onClick={() => dispatch(addToCart(item.book))}>+</button>
          </div>
        </div>
      ))}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
      {totalPrice > 0 && (
        <div className={styles.buttons}>
          <button className={styles.clear} onClick={() => dispatch(clearCart())}>Clear cart</button>
          <button className={styles.checkout} onClick={() => setCheckout(true)}>Checkout</button>
          {checkout && <button className={styles.cancel} onClick={() => setCheckout(false)}>Cancel</button>}
        </div>
      )}
      {checkout && <PaymentForm />}
    </div>
  );
}

export default Cart;