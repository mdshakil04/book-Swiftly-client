/* eslint-disable no-unused-vars */
import React from "react";
import newsletterImg from "../../../assets/Images/Festival/newsletter.png";
const Newslatter = () => {
  return (
    <div className=" grid grid-cols-2 bg-[#EAFBF7] my-8 rounded-tl-full rounded-br-full p-8">
      <div className=" text-center flex flex-col justify-center items-center p-8">
        <h2 className="text-5xl p-4">Please Join Our Newsletter</h2>
        <p>Read and share new perspectives on just about any topic. Everyone’s welcome.</p>
        <ol>
            <li>Get More Discount</li>
            <li>Get Premium Magazines</li>
        </ol>
        <input placeholder="Enter Your Email" type="text" />
      </div>
      <div>
        <img src={newsletterImg} alt="" />
      </div>
    </div>
  );
};

export default Newslatter;
