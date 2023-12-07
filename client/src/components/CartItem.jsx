import { Link } from 'react-router-dom'
import ManageCart from './ManageCart'
import styles from '../styles/components/CartItem.module.scss'

const CartItem = ({ item }) => {
  return (
    <div to={`/book/${item.book.id}`} className={styles.cartItem}>
      <Link to={`/book/${item.book.id}`} className={styles.link}>
        <div className={styles.image}>
          <img src={item.book.image} alt={item.book.title} />
        </div>
        <div className={styles.info}>
          <h2 className={styles.bookTitle}>{item.book.title}</h2>
          <p className={styles.bookAuthor}>{item.book.author}</p>
          <p className={styles.bookPrice}>${item.book.price}</p>
        </div>
      </Link>
      <ManageCart book={item.book} />
    </div>
  )
}

export default CartItem