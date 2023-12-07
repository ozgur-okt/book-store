import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import bookIcon from '../assets/book.svg';
import barIcon from '../assets/bars.svg';
import styles from '../styles/components/Navbar.module.scss';

function Navbar() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const cart = useSelector(state => state.books.cart);
  const totalItems = cart.length;

  const toggleNavbar = () => setIsNavbarExpanded(!isNavbarExpanded);

  return (
    <nav className={`${styles.navbar} ${isNavbarExpanded ? styles.expanded : ''}`}>
      <Link to="/" className={styles.logo} onClick={isNavbarExpanded && toggleNavbar}>
        <img src={bookIcon} alt="Book Icon" className={styles.bookIcon} />
        <h1 className={styles.title}>BookStore</h1>
      </Link>
      <Link to="/" className={styles.link} onClick={isNavbarExpanded && toggleNavbar}>Book List</Link>
      <Link to="/cart" className={styles.link} onClick={isNavbarExpanded && toggleNavbar}>
        Cart
        {totalItems > 0 && (
          <span className={styles.cartCount}>{totalItems}</span>
        )}
      </Link>
      <img src={barIcon} alt="Bar Icon" className={styles.barIcon} onClick={toggleNavbar} />
    </nav>
  );
}

export default Navbar;