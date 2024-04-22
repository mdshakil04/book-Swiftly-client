/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
// import img1 from "../../../assets/Images/Barishal/shruti-singh-zk1KY3GQEZA-unsplash.jpg";
// import img2 from "../../../assets/Images/Barishal/girl-embroidered-dress-is-standing-yard-looking-into-sky.jpg";
// import img3 from "../../../assets/Images/Festival/medium-shot-couple-hiking-together.jpg";
// import img4 from "../../../assets/Images/Noakhali/rice-noodles-bowl-curry-paste-with-chili-cucumber-long-bean-lime-garlic-spring-onion.jpg";

// eslint-disable-next-line react/prop-types
const TopServices = ({ service }) => {
  const { name, image, description, price } = service;
  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Tour-image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <p>
            Price start from : $<span className=" text-red-400 font-bold">{price}</span>
          </p>
          <button className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
