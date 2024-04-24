/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
// import { AuthContext } from './../../../providers/AuthProvider';
const SearchFunctionality = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className=" bg-[#EAFBF7]  mt-12 p-8 rounded-2xl">
      <div className=" md:flex md:justify-evenly p-4 rounded-xl bg-white">
        <div>
          <input
            className="input lg:text-xl join-item  "
            placeholder="Where can we take you ?"
          />
        </div>
        <div className="  w-auto ">
          <h2 className=" font-bold ">Select Date</h2>
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
