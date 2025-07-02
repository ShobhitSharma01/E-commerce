import "./About.css"


const About = () => {
    
    return (
      <div className="about-container">
  <h1 className="story">Our Story</h1>

  <div className="about-row">
    <div className="about-line">
      <h4>
        Bin.Mart's journey, founded by Ram Chandra Agarwal, began with a simple idea: affordable quality goods for the Indian shopper. Agarwal's early struggles, including a physical disability and humble beginnings, shaped his drive and frugal approach to business. <br />
         He started small, with a photocopy shop and then a clothing store, before expanding to Bin.Mart. The company grew rapidly, but faced challenges during the 2008 financial crisis, eventually leading to its sale.
        Early Years and Expansion:
Ram Chandra Agarwal's journey began with a small photocopy shop in Kolkata. 
He then ventured into the clothing business in Kolkata, building a successful retail store. 
In 2001-2002, he founded Bin Retail, which later evolved into Bin Mart. 
Vishal Mega Mart quickly gained popularity for its focus on value retail, offering quality goods at reasonable prices. 
The company expanded rapidly, establishing numerous stores across India. 

      </h4>
    </div>

    <div  id="aboutContainer"   className="img-container">
      <img src="/images/cert.jpg" alt="lady with cart" className="image" />
    </div>
  </div>
  <div className="growth">Our Growth</div>
   <div className="icons">
  
  <div className="icon-box">
    <img src="/images/coin.png" alt="coinimage" className="icon-img" />
    <h3>10.5k</h3>
    <h5>Affordable Prices</h5>
  </div>
  <div className="icon-box">
    <img src="/images/wooden-house.png" alt="houseimage" className="icon-img" />
    <h3>33k</h3>
    <h5>Our Foundation</h5>
  </div>
  <div className="icon-box">
    <img src="/images/businessman.png" alt="businessimage" className="icon-img" />
    <h3>45.k</h3>
    <h5>Leadership</h5>
  </div>
  <div className="icon-box">
    <img src="/images/money-bag.png" alt="money" className="icon-img" />
    <h3>25k</h3>
    <h5>Financial Growth</h5>
  </div>
</div>
<div className="team">Our Team</div>
<div className="team-container">
  <div className="team-card">
    <img src="/images/team.jpg" alt="Tom Cruise" className="team-img" />
    <hr />
    <h2>Tom Cruise</h2>
    <h4>Founder & Chairman</h4>
    <div className="social-icons">
      <i className="fab fa-twitter"></i>
      <i className="fab fa-instagram"></i>
      <i className="fab fa-linkedin"></i>
    </div>
  </div>

  <div className="team-card">
    <img src="/images/team.avif" alt="Emma Watson" className="team-img" />
    <hr/>
    <h2>Stifn Smith</h2>
    <h4>Managing Director</h4>
    <div className="social-icons">
      <i className="fab fa-twitter"></i>
      <i className="fab fa-instagram"></i>
      <i className="fab fa-linkedin"></i>
    </div>
  </div>
  <div className="team-card">
    <img src="/images/modl.webp" alt="Will Smith" className="team-img" />
    <hr />
    <h2>Will Smith</h2>
    <h4>Product Designer</h4>
    <div className="social-icons">
      <i className="fab fa-twitter"></i>
      <i className="fab fa-instagram"></i>
      <i className="fab fa-linkedin"></i>
    </div>
  </div>
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
    )
}

export default About;