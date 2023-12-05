import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookDetails from './components/BookDetails';
import BookList from './components/BookList';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/" element={<BookList />} />
      </Routes>
    </Router>
  );
}

export default App;