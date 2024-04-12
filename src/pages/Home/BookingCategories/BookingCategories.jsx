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
          <div className=" max-w-xs border">
            <h2>Select Date</h2>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" max-w-xs border">
            <h2>Select Date</h2>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </TabPanel>
        <TabPanel>
        <div className=" max-w-xs border">
            <h2>Select Date</h2>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookingCategories;
