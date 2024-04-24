/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
const SearchFunctionality = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className=" bg-[#EAFBF7] pt-4 mt-12 px-2">
      <div className=" md:flex justify-center lg:gap-24 pb-4 rounded-xl">
        <div>
          <input
            className="input lg:text-xl join-item bg-[#EAFBF7] "
            placeholder="Where can we take you ?"
          />
        </div>
        <div className=" bg-[#EAFBF7] w-auto ">
          <h2 className=" ">Select Date</h2>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="indicator">
          <li className=" join-item  btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400 lg:btn-wide font-bold  text-white lg:text-xl">
          <Link to='/locations'>Find Place</Link>
          </li>
          {/* <button className=" join-item  btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400 lg:btn-wide font-bold  text-white lg:text-xl">
            Find Places
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SearchFunctionality;
