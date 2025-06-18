import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from './PublicRoutes';
import PrivateNavbar from './Navbar/PrivateNavbar';
import PublicNavbar from './Navbar/PublicNavbar';

function App() {
  const token = localStorage.getItem("Token"); 
  return (
    <Router>
      {token? <PrivateNavbar/> : <PublicNavbar/>}
      {token ? <PrivateRoutes /> : <PublicRoutes />}
    </Router>
  );
}

export default App;
