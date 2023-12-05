import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookDetails from './components/BookDetails';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

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