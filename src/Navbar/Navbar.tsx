import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h5>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h5>
      </div>

      <div className="navbar">
        <img src="/images/shopping-cart.png" alt="logo" className="logo" />

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Log In</Link></li>
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

export default Navbar;
