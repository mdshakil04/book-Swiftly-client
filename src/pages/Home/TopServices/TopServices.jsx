/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const TopServices = ({ service }) => {
  const { name, image, description, price } = service;
  return (
    <div className="card lg:w-96  bg-[#EAFBF7] shadow-xl">
      <figure>
        <img src={image} alt="Tour-image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <p>
            Price start from : $
            <span className=" text-red-400 font-bold">{price}</span>
          </p>
          <li className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400" >
            <Link to='/adDetails'>See Details</Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
