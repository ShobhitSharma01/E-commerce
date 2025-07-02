import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from "../../Redux/Store"; 
import "./Navbar.css";
import Cart from '../../Pages/Cart/Cart';
import DropDown from './DropDown';

const PrivateNavbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");

  const cartCount = useSelector((state: RootState) => state.cart.cart.length);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const user = localStorage.getItem("user");

    if (loggedIn && user) {
      const parsedUser = JSON.parse(user);
      const fullName = parsedUser.name?.firstname + " " + parsedUser.name?.lastname;
      setIsLoggedIn(true);
      setUserName(fullName);
    } else {
      setIsLoggedIn(false);
      setUserName("");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    localStorage.removeItem("Token");
    setIsLoggedIn(false);

    setTimeout(() => {
      navigate("/login");
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="header">
      <div className="header-left">
        <h5>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h5>
      </div>
      <div className="navbar">
        <Link to="/">
          <img src="/images/lego.png" alt="logo" className="logo" />
        </Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {isLoggedIn && (
            <>
              <li className="user-profile"><Link to="/profile">Profile</Link></li>
              <li><button onClick={handleLogout} className="logout">Logout</button></li>
            </>
          )}
        </ul>
        <div className='dropdown-container'>
          <DropDown />
        </div>
        <div className="cart-icon">
<img
  src="/images/caert.png"
  alt="cart"
  className="heart"
  onClick={() => navigate("/cart")}
/>


        </div>
      </div>
    </div>
  );
};

export default PrivateNavbar;
