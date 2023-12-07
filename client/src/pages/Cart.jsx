import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart} from '../redux/actions'
import PaymentForm from '../components/PaymentForm'
import CartItem from '../components/CartItem'
import styles from '../styles/pages/Cart.module.scss'

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.books.cart)
  const [checkout, setCheckout] = useState(false)

  const totalPrice = cart.reduce((total, item) => total + item.book.price * item.count, 0)

  return (
    <div className={styles.cart}>
      {!cart.length && <p className={styles.empty}>Your cart is empty</p>}
      {cart.map(item => (
        <CartItem key={item.book.id} item={item} />
      ))}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
      {totalPrice > 0 && (
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.clear}`} onClick={() => dispatch(clearCart())}>Clear cart</button>
          <button className={`${styles.button} ${styles.checkout}`} onClick={() => setCheckout(true)}>Checkout</button>
          {checkout && <button className={`${styles.button} ${styles.cancel}`} onClick={() => setCheckout(false)}>Cancel</button>}
        </div>
      )}
      {checkout && <PaymentForm />}
    </div>
  )
}

export default Cart