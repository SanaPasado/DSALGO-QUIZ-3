import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import ServiceDetail from './screens/ServiceDetail';
import UsersList from './screens/UsersList';
import UserProfile from './screens/UserProfile';
import RegisterUser from './screens/RegisterUser';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> 
        <Routes>
          <Route path="/" element={<Homescreen />} exact />
          <Route path="/services/:pk" element={<ServiceDetail />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:userId" element={<UserProfile />} />
          <Route path="/register" element={<RegisterUser />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;