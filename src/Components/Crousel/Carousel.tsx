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
          src="/images/sale.webp"
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
          src="/images/game.jpeg"
          alt="Sale"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
