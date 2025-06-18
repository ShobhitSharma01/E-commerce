import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./Navbar.css";
import Profile from '../Profile/Profile';

const PrivateNavbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<any>(localStorage.getItem("isLoggedIn") === "true");
  const [userName, setUserName] = useState<string>("");
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

    setTimeout(()=>{
      navigate("/login");
      window.location.reload();
    },1000);
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
              <li className="user-profile"> <Link to="/profile">Profile</Link></li>
              <li><button onClick={handleLogout} className="logout">Logout</button></li>
        </ul>
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img src="/images/search.png" alt="search" className="search" />
        </div>

        <img src="/images/heart.png" alt="heart" className="heart" />
      </div>
    </div>
  );
};

export default PrivateNavbar;
