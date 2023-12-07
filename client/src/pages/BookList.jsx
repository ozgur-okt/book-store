import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBooks } from '../redux/actions'
import ScrollButton from '../components/ScrollButton'
import Book from '../components/Book'
import styles from '../styles/pages/BookList.module.scss'

function BookList() {
  const dispatch = useDispatch()
  const books = useSelector(state => state.books.books)
  const loading = useSelector(state => state.books.loading)
  const error = useSelector(state => state.books.error)

  const [searchTerm, setSearchTerm] = useState('')
  const [delayedSearchTerm, setDelayedSearchTerm] = useState('')

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])

  useEffect(() => {
    const searchTimer = setTimeout(() => {
      setDelayedSearchTerm(searchTerm)
    }, 300)

    return () => {
      clearTimeout(searchTimer)
    }
  }, [searchTerm])

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  if (!books) {
    return <h2>No books found</h2>
  }

  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(delayedSearchTerm.toLowerCase()))

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
            return (
              <Book key={book.id} book={book} />
            )
          })
          : <h2>No books found</h2>}
      </div>
      <ScrollButton />
    </div>
  )
}

export default BookList