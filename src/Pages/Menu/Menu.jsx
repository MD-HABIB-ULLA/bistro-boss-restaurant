import { Helmet } from "react-helmet";
import MenuDetails from "../../Components/MenuDetails/MenuDetails";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss - Menu</title>
      </Helmet>
      <MenuDetails />
    </div>
  );
};

export default Menu;
