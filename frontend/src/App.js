import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import ServiceDetail from './screens/ServiceDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> 
        <Routes>
          <Route path="/" element={<Homescreen />} exact />
          <Route path= "/services/:pk" element = {<ServiceDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;