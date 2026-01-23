import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import About from './screens/About';
import Contact from './screens/Contact';
import ServiceDetail from './screens/ServiceDetail';
import UsersList from './screens/UsersList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> 
        <Routes>
          <Route path="/" element={<Homescreen />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/photo/:id" element={<ServiceDetail />} />
          <Route path="/users" element={<UsersList />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;