import SectoinTitle from "../SectionTitle/SectoinTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegStar, FaStar } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Rating from "react-rating";
import { useEffect, useState } from "react";

const CustomerReview = () => {
  const [reData, setReData] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReData(data));
  }, []);

  return (
    <section>
      <SectoinTitle
        smallTitle="What Our Clients Say"
        largeTitle="TESTIMONIALS"
      />
      <div className="lg:px-20 md:px-10 px-5">
        <Swiper
          navigation={true} 
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 4000 }}
          loop
          className="mySwiper "
        >
          {reData.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="text-center w-full flex justify-center gap-2">
                {" "}
                <Rating
                  emptySymbol={
                    <FaRegStar className="text-yellow-500 text-3xl mr-1" />
                  }
                  fullSymbol={
                    <FaStar className="text-yellow-500 mr-1 text-3xl" />
                  }
                  initialRating={data.rating}
                  readonly
                />
              </div>
              <div className="flex items-center flex-col gap-8 mt-10">
                <img src="https://i.ibb.co/JvhT1PF/Group-1.png" alt="" />
                <p className="text-center px-10">{data.details}</p>
                <p className="text-3xl text-yellow-500 uppercase ">
                  {" "}
                  {data.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerReview;
