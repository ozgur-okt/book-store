import { Link } from 'react-router-dom'
import ManageCart from './ManageCart'
import styles from '../styles/components/Book.module.scss'

const Book = ({ book }) => {
  return (
    <div className={styles.bookCard}>
      <Link to={`/book/${book.id}`} className={styles.link} >
        <img src={book.image} alt={book.title} className={styles.bookImage} />
        <h2 className={styles.bookTitle}>{book.title}</h2>
        <p className={styles.bookAuthor}>{book.author}</p>
        <p className={styles.bookPrice}>$ {book.price}</p>
      </Link>
      <ManageCart className={styles.manageCart} book={book} />
    </div>
  )
}

export default Book