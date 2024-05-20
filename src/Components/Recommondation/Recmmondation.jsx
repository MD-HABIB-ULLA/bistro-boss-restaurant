import { useEffect, useState } from "react";
import SectoinTitle from "../SectionTitle/SectoinTitle";

const Recmmondation = () => {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenuData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="lg:mx-10 ">
      <SectoinTitle smallTitle="Should Try" largeTitle="CHEF RECOMMENDS" />
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:p-0 p-10 gap-10">
        {menuData.slice(6, 9).map((menu, i) => (
          <div key={i} className="card w-full bg-base-100 shadow-xl ">
            <figure className=" ">
              <img src={menu.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{menu.name}</h2>
              <p>{menu.recipe}</p>
              <div className="card-actions">
                <button className="btn my-10 border-b-4 px-10 rounded-xl border-x-transparent border-t-transparent border-yellow-500  text-yellow-400 py-2 ">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recmmondation;
