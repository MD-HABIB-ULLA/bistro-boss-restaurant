import { useEffect, useState } from "react";
import SectoinTitle from "../SectionTitle/SectoinTitle";
import pizzaBanner from "../../assets/pizza-bg.jpg";
import saladBanner from "../../assets/salad-bg.jpg";
import soupBanner from "../../assets/soup-bg.jpg";
import CommonBanner from "../CommonBanner/CommonBanner";
import CommonData from "../CommonData/CommonData";

const MenuDetails = () => {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenuData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {/* 01 */}
      <div>
        <div
          style={{
            backgroundImage: "url(https://i.ibb.co/Cmm8h4x/banner3.jpg)",
          }}
          className=" bg-no-repeat bg-cover bg-center pt-40 pb-20 md:px-40 px-10 mb-10"
        >
          <div className="cinzel text-center text-white py-20 bg-black h-full bg-opacity-50 flex items-center justify-center p-4 rounded">
            <div className="space-y-3">
              <p className="md:text-6xl text-4xl font-semibold ">OUR MENU</p>
              <p className="text-xl">Would you like to try a dish?</p>
            </div>
          </div>
        </div>
        <SectoinTitle smallTitle="Don't miss" largeTitle="TODAY'S OFFER" />
        <section className="grid md:grid-cols-2 grid-cols-1 gap-10 p-5">
          {menuData.slice(0, 6).map((menu, i) => (
            <div key={i} className="flex items-center gap-5">
              <img
                src={menu.image}
                alt=""
                className="h-24 w-28 rounded-b-full rounded-r-full"
              />
              <div className="w-full">
                <div className="flex justify-between ">
                  <p>{menu.name} ------------------</p>
                  <p className="text-yellow-300 ">{menu.price}</p>
                </div>
                <p>{menu.recipe}</p>
              </div>
            </div>
          ))}
        </section>
        <div className="text-center">
          {" "}
          <button className="btn my-10 border-b-4 px-10 rounded-xl border-x-transparent border-t-transparent border-white text-white py-2 ">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </div>

      {/* 02 */}

      <div>
        <CommonBanner
          name="DESSERTS"
          img="https://i.ibb.co/YcBSmyk/dessert-bg.jpg"
          des=" Made from cream, sugar, and flavorings, ice cream is a frozen
          treat enjoyed worldwide. It comes in countless flavors, from
          classic vanilla to exotic mango."
        />
        <CommonData category="dessert" />
      </div>

      {/* 03 */}
      <div>
        <CommonBanner
          name="pizza"
          img={pizzaBanner}
          des="  It typically consists of a flattened round of dough topped
          with tomato sauce, cheese, which can range from traditional
          options like pepperoni, sausage, and mushrooms to more gourmet
          ingredients like arugula, and goat cheese."
        />

        <CommonData category="pizza" />
      </div>

      {/* 04 */}

      <div>
        <CommonBanner
          name="salad"
          img={saladBanner}
          des=" Salad is a versatile and refreshing dish that consists
          typically including vegetables, fruits, proteins, and
          dressings. The base of a salad is often made up but it can
          also feature grains, pasta, or legumes for a heartier version."
        />

        <CommonData category="salad" />
      </div>

      {/* 05 */}

      <div>
        <CommonBanner
          name="soup"
          img={soupBanner}
          des="  Soup is a warm, comforting dish that consists of various
          ingredients cooked in a liquid base, typically water, broth,
          or stock. It's a versatile meal that can be simple or complex,
          light or hearty, and can cater to different tastes and dietary
          needs."
        />

        <CommonData category="soup" />
      </div>
    </>
  );
};

export default MenuDetails;
