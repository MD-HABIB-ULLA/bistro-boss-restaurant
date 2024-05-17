import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel
      infiniteLoop="true"
      autoPlay="true"
      interval="5000"
      animationHandler="fade"
      className="z-10"
    >
      <div>
        <img src="https://i.ibb.co/vVn5ZVD/02.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/8MKSyN2/03.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/5B8y3Vt/04.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/k1Vx5MX/05.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/tCtWdtw/06.png" />
      </div>
      <div className="">
        <img src="https://i.ibb.co/0qW5cJ6/01.jpg" />
      </div>
    </Carousel>
  );
};

export default Banner;
