import React from 'react'
import ManageCart from './ManageCart'
import styles from '../styles/components/CartItem.module.scss'

const CartItem = ({ item }) => {
  return (
    <div key={item.book.id} className={styles.cartItem}>
      <img src={item.book.image} alt={item.book.title} />
      <div className={styles.info}>
        <h2 className={styles.bookTitle}>{item.book.title}</h2>
        <p className={styles.bookAuthor}>{item.book.author}</p>
        <p className={styles.bookPrice}>${item.book.price}</p>
        <ManageCart book={item.book} />
      </div>
    </div>
  )
}

export default CartItem