import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../assets/slide1.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SectoinTitle from "../SectionTitle/SectoinTitle";
const Category = () => {
  return (
    <div className="container m-auto">
      <SectoinTitle smallTitle='From 11:00am to 10:00pm' largeTitle="ORDER ONLINE"/>
      {" "}
      <>
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full"
        >
          <SwiperSlide className=" ">
            <img src={img} alt="" className="" />
            <p className="text-3xl cinzel text-white text-center -ml-10 -mt-8  ">
              soups
            </p>
          </SwiperSlide>
          <SwiperSlide className="">
            <img src="https://i.ibb.co/s3brVBp/slide4.jpg" alt="" />
            <p className="text-3xl cinzel text-white text-center -ml-10 -mt-8  ">
              soups
            </p>
          </SwiperSlide>
          <SwiperSlide className="">
            <img src="https://i.ibb.co/B26swm0/slide3.jpg" alt="" />
            <p className="text-3xl cinzel text-white text-center -ml-10 -mt-8  ">
              soups
            </p>
          </SwiperSlide>
          <SwiperSlide className="">
            <img src="https://i.ibb.co/7zM1PGg/slide2.jpg" alt="" />
            <p className="text-3xl cinzel text-white text-center -ml-10 -mt-8  ">
              soups
            </p>
          </SwiperSlide>
          <SwiperSlide className="">
            <img src="https://i.ibb.co/s3brVBp/slide4.jpg" alt="" />
            <p className="text-3xl cinzel text-white text-center -ml-10 -mt-8  ">
              soups
            </p>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Category;
