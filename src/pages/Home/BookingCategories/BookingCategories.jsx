/* eslint-disable no-unused-vars */

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const BookingCategories = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className=" container my-8 max-w-screen-2xl mx-auto text-center border-2 p-8">
      <Tabs>
        <TabList>
          <Tab>Stays</Tab>
          <Tab>Flights</Tab>
          <Tab>Cars</Tab>
          <Tab>Things to do</Tab>
        </TabList>

        <TabPanel>
          <div className=" flex gap-24">
            <div className=" max-w-xs p-4 border-2 rounded-xl">
              <h2 className=" font-bold">Select Date</h2>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className=" p-4">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                  Chose Destination
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Dhaka</a>
                  </li>
                  <li>
                    <a>Barishal</a>
                  </li>
                  <li>
                    <a>Noakhali</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" flex gap-24">
            <div className=" max-w-xs p-4 border-2 rounded-xl">
              <h2 className=" font-bold">Select Date</h2>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className=" p-4">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                  Chose Destination
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Dhaka</a>
                  </li>
                  <li>
                    <a>Barishal</a>
                  </li>
                  <li>
                    <a>Noakhali</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" flex gap-24">
            <div className=" max-w-xs p-4 border-2 rounded-xl">
              <h2 className=" font-bold">Select Date</h2>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className=" p-4">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                  Chose Destination
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Dhaka</a>
                  </li>
                  <li>
                    <a>Barishal</a>
                  </li>
                  <li>
                    <a>Noakhali</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" flex gap-24">
            <div className=" max-w-xs p-4 border-2 rounded-xl">
              <h2 className=" font-bold">Select Date</h2>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className=" p-4">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                  Chose Destination
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Dhaka</a>
                  </li>
                  <li>
                    <a>Barishal</a>
                  </li>
                  <li>
                    <a>Noakhali</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookingCategories;
