// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Home/Home.css'; 

// const CarouselFade = () => {
//   return (
//     <div className="container-fluid ">
//       <Carousel fade>
//         <Carousel.Item>
//           <img
//             className="carousel-image"
//             src="/images/flip3.jpeg"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First Slide</h3>
//             <p>Best Deals on iPhones</p>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             className="carousel-image"
//             src="/images/flip.jpeg"
//             alt="Second slide"
//           />
//           <Carousel.Caption>
//             <h3>Second Slide</h3>
//             <p>Massive Discounts</p>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             className="carousel-image"
//             src="/images/flip2.jpg"
//             alt="Third slide"
//           />
//           <Carousel.Caption>
//             <h3>Third Slide</h3>
//             <p>Hurry! Limited Time Offer</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// };

// export default CarouselFade;
import Carousel from 'react-bootstrap/Carousel';
import "./Home/Home.css";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
            className="carousel-image"
            src="/images/p.png"
            alt="First slide"
          />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
  <img 
        className="carousel-image"
            src="/images/r.jpg"
            alt="Second slide"
          />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img
            className="carousel-image"
            src="/images/m.avif"
            alt="Third slide"
          />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;