/* eslint-disable no-unused-vars */
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
          <Tab>Chittagong</Tab>
        </TabList>

        <TabPanel>
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8 ">
            <h2 className=" border-2 bg-lime-200 h-[350px]">Raz-Bari</h2>
            <h2 className=" border-2 bg-emerald-200 h-[350px]">Narayongonj</h2>
            <h2 className=" border-2 bg-cyan-300 h-[350px]">Raz-Bari</h2>
          </div>
        </TabPanel>
        <TabPanel>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8 ">
            <h2 className=" border-2 bg-cyan-300 h-[350px]">Bhola</h2>
            <h2 className=" border-2 bg-lime-200 h-[350px]">Potuakhali</h2>
            <h2 className=" border-2 bg-emerald-200 h-[350px]">Gopalgonj</h2>
          </div>
        </TabPanel>
        <TabPanel>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8 ">
            <h2 className=" border-2 bg-emerald-200 h-[350px]">Raz-Bari</h2>
            <h2 className=" border-2 bg-lime-200 h-[350px]">Narayongonj</h2>
            <h2 className=" border-2 bg-cyan-300 h-[350px]">Raz-Bari</h2>
          </div>
        </TabPanel>
        <TabPanel>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8 ">
            <h2 className=" border-2 bg-emerald-200 h-[350px]">Raz-Bari</h2>
            <h2 className=" border-2 bg-cyan-300 h-[350px]">Narayongonj</h2>
            <h2 className=" border-2 bg-lime-200 h-[350px]">Raz-Bari</h2>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTabs;
