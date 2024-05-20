import { useEffect, useState } from "react";

const FilterMneu = ({ category }) => {
  const [menuData, setMenuData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/menu")
      .then((res) => res.json())
      .then((data) => {
        setFoodData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const categoryData = foodData.filter((menu) => menu.category === category);
    console.log(categoryData);
    if (categoryData.length < 6) {
      setMenuData(categoryData);
    } else {
      setMenuData(categoryData.slice(0, 6));
    }
  }, [foodData, category]);

  const loadMore = () => {
    const additionalItems = foodData.filter(
      (menu) => menu.category === category
    );
    setMenuData(additionalItems); 
  };
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:p-0 p-10 gap-10">
        {menuData.map((menu, i) => (
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
      {menuData.length <
        foodData.filter((menu) => menu.category === category).length && (
        <div className="text-center">
          <button
            onClick={loadMore}
            className="btn my-10 border-b-4 px-10 rounded-xl border-x-transparent border-t-transparent border-yellow-500 text-yellow-400 py-2"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterMneu;
