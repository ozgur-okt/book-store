import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookDetails from './pages/BookDetails';
import BookList from './pages/BookList';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';

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
  );
}

export default App;