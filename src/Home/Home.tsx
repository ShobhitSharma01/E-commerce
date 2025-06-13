import Axios from "../Axios/Axios";
import UncontrolledExample from "../Carousel";
import CarouselCrossfadeExample from "../Carousel";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container"> 
      <div className="carousel-container">
        < UncontrolledExample/>
      </div>

      <div className="month">
        <div className="headings">
          <h6>This month</h6>
       <h2>Best selling Products</h2>
       <Axios/>
      </div>
      </div>
      <div className="categories">
        <div className="headings">
          <h6>Categories</h6>
          <h2>Browse by category</h2>
        </div>
        <div className="category-banner">
          <img src="/images/play.png" alt="music" />
        </div>
      </div>

      <div className="Featured">
        <div className="headings">
          <h6>Featured</h6>
          <h2>New Arrival</h2>
        </div>
        <img src="/images/j.jpg" alt="play" />
      </div>

      <div className="help">
        <div className="help-box">
          <img src="/images/transportation.png" alt="busimage" className="help-icons" />
          <h3>FAST AND FREE DELIVERY</h3>
          <h5>Free delivery for all orders over $140</h5>
        </div>
        <div className="help-box">
          <img src="/images/coustomer.png" alt="customer" className="help-icons" />
          <h3>24/7 CUSTOMER SERVICE</h3>
          <h5>Friendly 24/7 customer support</h5>
        </div>
        <div className="help-box">
          <img src="/images/give-money.png" alt="money" className="help-icons" />
          <h3>MONEY BACK GUARANTEE</h3>
          <h5>We return money within 30 days</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
