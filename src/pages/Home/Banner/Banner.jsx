/* eslint-disable no-unused-vars */
import React from "react";
import bannerimg from "../../../assets/Images/banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bannerimg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content md:-mt-40 lg:-ml-96 bg-base-100  text-center rounded-3xl">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-bold ">
          Unlock Unforgettable Experiences,<br></br> Discover Local Wonders,<br></br> Create
            Lifelong Memories
          </h1>
          <p className="mb-5">
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
