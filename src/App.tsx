import { useLocation } from 'react-router-dom';
import './App.css';
import PrivateRoutes from "./Routes/PrivateRoutes";
import PublicRoutes from './Routes/PublicRoutes';
import PrivateNavbar from './Components/Navbar/PrivateNavbar';
import PublicNavbar from './Components/Navbar/PublicNavbar';
import { useEffect } from 'react';
import Sidebar from './SideBar';

function App() {
  const token = localStorage.getItem("Token"); 
  const path = useLocation();
  useEffect(() => {
    if (path) {
      window.scrollTo(0, 0);
    }
  }, [path]);
  return (
    <div>
      {window.innerWidth < 600 ? <Sidebar /> : (token? <PrivateNavbar/> : <PublicNavbar/>)}
      {token ? <PrivateRoutes /> : <PublicRoutes />}
    </div>
  );
}

export default App;
