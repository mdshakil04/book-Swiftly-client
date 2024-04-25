/* eslint-disable no-unused-vars */
import React from "react";
import newsletterImg from "../../../assets/Images/Festival/newsletter.png";
const Newslatter = () => {
  return (
    <div className=" grid grid-cols-2 bg-[#EAFBF7] my-8 rounded-tl-full rounded-br-full p-8">
      <div className=" text-center flex flex-col justify-center items-center p-8 gap-2">
        <h2 className="text-4xl p-4 font-bold">Please Join Our Newsletter</h2>
        <p className=" font-sans">
          Read and share new perspectives on just about any topic.<br></br>{" "}
          Everyone’s welcome.
        </p>
        <ol className=" ">
          <li className=" font-bold">Get More Discount</li>
          <li className=" font-bold">Get Premium Magazines</li>
        </ol>
        <div>
          <input
            className=" p-4 px-12 rounded-lg  "
            placeholder="Enter Your Email"
            type="text"
          />
        </div>
      </div>
      <div>
        <img src={newsletterImg} alt="img" />
      </div>
    </div>
  );
};

export default Newslatter;
