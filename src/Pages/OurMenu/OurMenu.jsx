import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import "react-tabs/style/react-tabs.css";
import "./Style.css";
import FilterMneu from "../../Components/FilterMenu/FilterMneu";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
const OurMenu = () => {
  const categoryItem = ["salad", "pizza", "soup", "dessert", "drink"];
  const { category } = useParams();

  const categoryIndex = categoryItem.indexOf(category);
  console.log(categoryIndex);
  const [tapIndex, setTabIndex] = useState(categoryIndex);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss - Our Menu</title>
      </Helmet>
      <CommonBanner
        name="OUR SHOP"
        img={"https://i.ibb.co/sKFTdPn/banner2.jpg"}
        des="Would you like to try a dish?"
      />
      <div className="my-10 mb-20 ">
        <Tabs defaultIndex={tapIndex} onChange={(index) => setTabIndex(index)}>
          <div className="uppercase mb-10">
            <TabList>
              <Tab>Salad</Tab>
              <Tab>pizza</Tab>
              <Tab>soups</Tab>
              <Tab>desserts</Tab>
              <Tab>drinks</Tab>
            </TabList>
          </div>

          <TabPanel>
            <FilterMneu category="salad" />
          </TabPanel>
          <TabPanel>
            <FilterMneu category="pizza" />
          </TabPanel>
          <TabPanel>
            <FilterMneu category="soup" />
          </TabPanel>
          <TabPanel>
            <FilterMneu category="dessert" />
          </TabPanel>
          <TabPanel>
            <FilterMneu category="drinks" />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurMenu;
