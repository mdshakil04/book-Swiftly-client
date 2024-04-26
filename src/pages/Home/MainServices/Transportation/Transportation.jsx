/* eslint-disable no-unused-vars */
import React from "react";
import rikshaw from "../../../../assets/Images/Transportation/Rikshaw.jpg";

const Transportation = () => {
  return (
    <div className=" my-8">
      <h1 className="text-3xl text-center border-y-4 max-w-xs container py-4 mx-auto">
        Our Transport Services
      </h1>
      <p className=" text-center mb-4">
        Reliable, Comfortable, and Convenient Travel Solutions for Your
        Adventure!
      </p>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={rikshaw}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Rikshaw
              <div className="badge badge-secondary">Trending</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transportation;
