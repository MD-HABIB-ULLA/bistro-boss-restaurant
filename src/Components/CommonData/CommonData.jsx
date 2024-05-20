import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CommonData = ({category}) => {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenuData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="">
        <section className="grid md:grid-cols-2 grid-cols-1 gap-10 p-5 ">
          {menuData
            .filter((menu) => menu.category === category)
            .map((menu, i) => (
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
          <Link to={`/shop/${category}`} className="btn text-black border-0 my-10 border-b-4 px-10 rounded-xl   border-yellow-700 py-2 ">
            ORDER YOUR FAVOURITE FOOD
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommonData;
