import { useEffect, useState } from "react";
import SectoinTitle from "../SectionTitle/SectoinTitle";

const MenuSection = () => {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenuData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <SectoinTitle smallTitle="Check it out" largeTitle="FROM OUR MENU" />

      <section className="grid md:grid-cols-2 grid-cols-1 gap-10 p-5">
        {menuData.slice(0, 8).map((menu, i) => (
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
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default MenuSection;
