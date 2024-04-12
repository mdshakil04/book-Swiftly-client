/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../../../assets/Images/Dhaka/friends-walking-up-mountain.jpg";
import img2 from "../../../assets/Images/Barishal/girl-embroidered-dress-is-standing-yard-looking-into-sky.jpg";

const TopServices = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto grid md:grid-cols-2 my-4 gap-8">
      <div className="card card-side bg-base-100 shadow-xl ">
        <figure className=" w-1/2">
          <img
            src={img1}
            alt="Movie"
          />
        </figure>
        <div className="card-body w-1/2">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------- */}
      <div className="card card-side bg-base-100 shadow-xl ">
        <figure className=" w-1/2">
          <img
            src={img2}
            alt="Movie"
          />
        </figure>
        <div className="card-body w-1/2">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
