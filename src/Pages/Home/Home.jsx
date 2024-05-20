import Banner from "../../Components/Banner/Banner";
import CustomerReview from "../../Components/CustomerReview/CustomerReview";
import Recmmondation from "../../Components/Recommondation/Recmmondation";
import SectoinTitle from "../../Components/SectionTitle/SectoinTitle";
import Category from "../../Components/category/Category";
import img from "../../assets/featured.jpg";
import MenuSection from "../../Components/MenuSection/MenuSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss - Home</title>
      </Helmet>
      <div className=" ">
        <Banner />
        <Category />
        <section
          style={{
            backgroundImage: "url(https://i.ibb.co/RNw4dRT/chef-service.jpg",
          }}
          className=" p-20 mt-20 bg-cover bg-no-repeat bg-fixed"
        >
          <div className="bg-white text-black inter p-5 py-20 text-center">
            {" "}
            <p className="text-3xl font-bold">Bistro Boss</p>
            <p className="text-xl mt-3">
              At Bistro Boss, we pride ourselves on offering an unparalleled
              dining experience. Our chefs create mouth-watering dishes that
              blend traditional recipes with modern flavors, ensuring every bite
              is a delight. Join us for a meal that you wont forget!
            </p>
          </div>
        </section>
        <MenuSection />
        <section className="bg-black px-10 mt-10 text-center text-4xl inter font-bold text-white py-20">
          <p>Call Us: +88 0192345678910</p>
        </section>
        <Recmmondation />
        <section className="inter">
          <SectoinTitle smallTitle="Check it out" largeTitle="FROM OUR MENU" />

          <div
            className="hero    mt-10 bg-no-repeat bg-cover bg-fixed"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="hero-content flex-col lg:flex-row py-20 px-20 bg-black gap-10 bg-opacity-50">
              <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
              <div className="text-white">
                <h1 className="text-2xl font-bold">
                  March 20, 2023 <br />
                  WHERE CAN I GET SOME?
                </h1>
                <p className="py-6">
                  Our beautifully designed dining area provides a perfect
                  ambiance for a romantic dinner, family gathering, or casual
                  meal with friends. For special occasions or business meetings,
                  enjoy the privacy and exclusivity of our elegantly decorated
                  private dining rooms.
                </p>
                <button className="btn text-white border-4 border-white bg-transparent border-x-transparent border-t-transparent rounded-xl">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>

        <CustomerReview />
      </div>
    </div>
  );
};

export default Home;
