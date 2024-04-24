/* eslint-disable no-unused-vars */
import React from "react";
import img from "../../../assets/Images/Festival/medium-shot-couple-hiking-together.jpg";
import { Link } from "react-router-dom";
const MainServices = () => {
  return (
    <div className=" my-8">
      <h1 className="text-3xl text-center border-y-4 max-w-xs container py-4 mx-auto">
        Our Top Services
      </h1>
      <p className=" text-center mb-4">
        Enjoy Local peoples daily life and foods.
      </p>
      <div className=" lg:grid lg:grid-cols-3 gap-4 p-4">
        <div className="card   bg-[#EAFBF7] shadow-xl">
          <figure>
            <img src={img} alt="Tour-image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Book An Adventure</h2>
            <p>Service details</p>
            <div className="card-actions justify-end">
              <p>Price start from : $</p>
              <li className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                <Link to="/serviceDetails">See Details</Link>
              </li>
            </div>
          </div>
        </div>
        <div className="card   bg-[#EAFBF7] shadow-xl">
          <figure>
            <img src={img} alt="Tour-image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Tour Gide</h2>
            <p>Service details</p>
            <div className="card-actions justify-end">
              <p>Price start from : $</p>
              <li className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                <Link to="/serviceDetails">See Details</Link>
              </li>
            </div>
          </div>
        </div>
        <div className="card  bg-[#EAFBF7] shadow-xl">
          <figure>
            <img src={img} alt="Tour-image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Transportation</h2>
            <p>Service details</p>
            <div className="card-actions justify-end">
              <p>Price start from : $</p>
              <li className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                <Link to="/serviceDetails">See Details</Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainServices;
