import { Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import Header from './components/Header';
import About from './components/About';
import Products from './components/Products';
import Review from './components/Review';
import Contact from './components/Contact';
import WriteReview from './components/WriteReview';
import './App.css';


function App() {

  return (
    <div className="App">
      
      <Header />
        
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/buyproduct" element={<Products />} />
          <Route path="/review" element={<Review />} />
          <Route path="/writereview" element={<WriteReview />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      
    </div>

  );
}

export default App;

