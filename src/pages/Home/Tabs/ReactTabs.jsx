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
    <div className=" container my-8 max-w-screen-2xl mx-auto text-center  p-8">
      <h1 className=" container mx-auto mb-4 border-y-4  max-w-xs text-center py-2 text-3xl">
        Explore Bangladesh
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
              <div className="card card-compact  bg-[#EAFBF7] shadow-xl">
                <figure>
                  <img src={DhakaImage1} alt="Image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-3xl">Naraongonj</h2>
                  <div className="card-actions ">
                    <button className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                      Book An Adventure
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* -------------------------------------------------------------- */}
            <div>
              <div className="card card-compact  bg-[#EAFBF7] shadow-xl">
                <figure>
                  <img src={BarishalImage1} alt="Image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-3xl">Foridpur</h2>
                  <div className="card-actions ">
                    <button className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                      Book An Adventure
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------------------------------------------------------- */}
            <div>
              <div className="card card-compact  bg-[#EAFBF7] shadow-xl">
                <figure>
                  <img src={DhakaImage3} alt="Image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-3xl">Chandpur</h2>
                  <div className="card-actions ">
                    <button className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                      Book An Adventure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        {/* ------------------------------------------ */}
        <TabPanel>
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
            <div>
              <div className="card card-compact  bg-[#EAFBF7] shadow-xl">
                <figure>
                  <img src={BarishalImage1} alt="Image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-3xl">Bhola</h2>
                  <div className="card-actions ">
                    <button className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                      Book An Adventure
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card card-compact  bg-[#EAFBF7] shadow-xl">
                <figure>
                  <img src={BarishalImage2} alt="Image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-3xl">Potukhali</h2>
                  <div className="card-actions ">
                    <button className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                      Book An Adventure
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card card-compact  bg-[#EAFBF7] shadow-xl">
                <figure>
                  <img src={BarishalImage3} alt="Image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-3xl">Firozpur</h2>
                  <div className="card-actions ">
                    <button className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                      Book An Adventure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        {/* --------------------------------------------- */}
        <TabPanel>
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
            <div>
              <div className="card card-compact  bg-[#EAFBF7] shadow-xl">
                <figure>
                  <img src={Noakhali1} alt="Image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-3xl">Laxmipur</h2>
                  <div className="card-actions ">
                    <button className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                      Book An Adventure
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card card-compact  bg-[#EAFBF7] shadow-xl">
                <figure>
                  <img src={Noakhali2} alt="Image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-3xl">Kompanigonj</h2>
                  <div className="card-actions ">
                    <button className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                      Book An Adventure
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card card-compact  bg-[#EAFBF7] shadow-xl">
                <figure>
                  <img src={Noakhali3} alt="Image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-3xl">Sonapur</h2>
                  <div className="card-actions ">
                    <button className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                      Book An Adventure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTabs;
