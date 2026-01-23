import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import About from './screens/About';
import Cart from './screens/Cart';
import Contact from './screens/Contact';
import CustomOrders from './screens/CustomOrders';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './screens/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> 
        <Routes>
          <Route path="/" element={<Homescreen />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/custom-orders" element={<CustomOrders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path ="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;