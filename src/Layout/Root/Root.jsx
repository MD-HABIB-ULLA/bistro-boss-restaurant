import Banner from "../../Components/Banner/Banner";
import Navber from "../../Components/Navber/Navber";
import Category from "../../Components/category/Category";

const Root = () => {
  return (
    <>
      <div className="">
        <Navber />
        <div className="max-w-screen-xl m-auto ">
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
                blend traditional recipes with modern flavors, ensuring every
                bite is a delight. Join us for a meal that you won't forget!
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Root;
