import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categories from './components/Category';
import BookDisplay from './components/BookDisplay';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="displayPart">
          <Routes>
            <Route path="/" element={<BookDisplay />} />
            <Route path="/Category" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
