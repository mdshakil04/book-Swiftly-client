/* eslint-disable no-unused-vars */
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DhakaImage1 from "../../../assets/Images/Dhaka/friends-walking-up-mountain.jpg";
import DhakaImage2 from "../../../assets/Images/Dhaka/tourists-taking-stroll-around-hija-glamping-lake-bloke-nova-vas-slovenia.jpg";
import DhakaImage3 from "../../../assets/Images/Dhaka/weekend-seniors.jpg";
import BarishalImage1 from "../../../assets/Images/Barishal/girl-embroidered-dress-is-standing-yard-looking-into-sky.jpg";
import BarishalImage2 from "../../../assets/Images/Barishal/medium-shot-couple-hiking-together.jpg";
import BarishalImage3 from "../../../assets/Images/Barishal/shruti-singh-zk1KY3GQEZA-unsplash.jpg";
import Noakhali1 from "../../../assets/Images/Noakhali/etty-fidele-oJpkjWcScyg-unsplash.jpg";
import Noakhali2 from "../../../assets/Images/Noakhali/rani-george-nXOgb54BMB4-unsplash.jpg";
import Noakhali3 from "../../../assets/Images/Noakhali/rice-noodles-bowl-curry-paste-with-chili-cucumber-long-bean-lime-garlic-spring-onion.jpg";

const ReactTabs = () => {
  return (
    <div className=" container my-8 mx-auto text-center border-2 p-8">
      <h1 className=" container mx-auto mb-4 border-y-4 uppercase max-w-lg text-center text-4xl font-bold">
        --Select Your Desire City--
      </h1>
      <Tabs>
        <TabList>
          <Tab>Dhaka</Tab>
          <Tab>Barishal</Tab>
          <Tab>Noakhali</Tab>
        </TabList>

        <TabPanel>
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
            <div>
                <h1 className=" p-4 font-bold text-2xl text-blue-950 absolute">Naraongonj</h1>
                <img className=" md:h-[300px]" src={DhakaImage1} alt="Image" />
            </div>
            <div>
                <h1 className=" p-4 font-bold text-2xl text-white absolute">Foridpur</h1>
                <img className=" md:h-[300px]" src={DhakaImage2} alt="Image" />
            </div>
            <div>
                <h1 className=" p-4 font-bold text-2xl text-white absolute">Chadpur</h1>
                <img className=" md:h-[300px]" src={DhakaImage3} alt="Image" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
          <div>
                <h1 className=" p-4 font-bold text-2xl text-white absolute">Bhola</h1>
                <img className=" md:h-[300px]" src={BarishalImage1} alt="Image" />
            </div>
            <div>
                <h1 className=" p-4 font-bold text-2xl text-white absolute">Potuakhali</h1>
                <img className=" md:h-[300px]" src={BarishalImage2} alt="Image" />
            </div>
            <div>
                <h1 className=" p-4 font-bold text-2xl text-white absolute">FhirozPur</h1>
                <img className=" md:h-[300px]" src={BarishalImage3} alt="Image" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
          <div>
                <h1 className=" p-4 font-bold text-2xl text-white absolute">Maizdi</h1>
                <img className=" md:h-[300px]" src={Noakhali1} alt="Image" />
            </div>
            <div>
                <h1 className=" p-4 font-bold text-2xl text-white absolute">LoxmiPur</h1>
                <img className=" md:h-[300px]" src={Noakhali2} alt="Image" />
            </div>
            <div>
                <h1 className=" p-4 font-bold text-2xl text-white absolute">Laxsham</h1>
                <img className=" md:h-[300px]" src={Noakhali3} alt="Image" />
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTabs;
