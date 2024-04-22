/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const SearchFunctionality = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className=" bg-[#EAFBF7] pt-4 ">
      <div className=" flex justify-center gap-24 pb-4 rounded-xl">
        <div>
          <div>
            <input
              className="input text-xl join-item bg-[#EAFBF7] "
              placeholder="Where can we take you ?"
            />
          </div>
        </div>
        <div className=" bg-[#EAFBF7] ">
          <h2 className=" ">Select Date</h2>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="indicator">
          <button className=" join-item  btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400 btn-wide font-bold  text-white text-xl">Find Places</button>
        </div>
      </div>
    </div>
  );
};

export default SearchFunctionality;
