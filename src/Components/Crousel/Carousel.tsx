import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Carousel.css";
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
            className="carousel-image"
            src="/images/wi.avif"
            alt="First slide"
          />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
  <img 
        className="carousel-image"
            src="/images/banner.avif"
            alt="Second slide"
          />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img
            className="carousel-image"
            src="/images/jw.webp"
            alt="Third slide"
          />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;