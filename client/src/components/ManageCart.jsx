import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/actions'
import cartIcon from '../assets/cart.svg'
import styles from '../styles/components/ManageCart.module.scss'

const ManageCart = ({ book }) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.books.cart)
  const bookInCart = cart.find(item => item.book.id === book.id)

  return (
    <div>
      {bookInCart ? (
        <div className={styles.count}>
          <button className={styles.minus} onClick={() => dispatch(removeFromCart(book.id))}>-</button>
          {bookInCart.count}
          <button className={styles.plus} onClick={() => dispatch(addToCart(book))}>+</button>
        </div>
      ) : (
        <button className={styles.cartBtn} onClick={() => dispatch(addToCart(book))} >
          Add to Cart <img src={cartIcon} alt='cart' />
        </button>
      )}
    </div>
  )
}

export default ManageCart