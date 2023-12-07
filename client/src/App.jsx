import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import BookDetails from './pages/BookDetails'
import Cart from './pages/Cart'
import BookList from './pages/BookList'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<BookList />} />
      </Routes>
    </Router>
  )
}

export default App