import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel-image"
          src="/images/wi.avif"
          alt="Winter Slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel-image"
          src="/images/3.jpg"
          alt="Banner Slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel-image"
          src="/images/jw.webp"
          alt="Jewelry Slide"
        />
        <Carousel.Caption>
                  </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel-image"
          src="/images/banner.avif"
          alt="banner"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel-image"
          src="/images/i.jpg"
          alt="Sale"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
