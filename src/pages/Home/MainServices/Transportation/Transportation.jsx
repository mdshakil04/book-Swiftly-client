/* eslint-disable no-unused-vars */
import React from "react";
import rikshaw from "../../../../assets/Images/Transportation/Rikshaw.jpg";
import GorurGari from "../../../../assets/Images/Transportation/GorurGari.jpg";
import Boat from "../../../../assets/Images/Transportation/Boat.jpg";
import Van from "../../../../assets/Images/Transportation/Van.jpg";

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
      <div className=" md:grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className=" rounded-t-2xl h-[250px]"
              src={rikshaw}
              alt="Image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Rikshaw
              <div className="badge badge-secondary">Trending</div>
            </h2>
            <p>Rikshaw is a two-wheeler that is used for transportation. It is
                a two-wheeler that is used for transportation.</p>
            <p>Capacity: Typically Seats 1-2 person</p>
            <p>Feature: Open-air seating, pedal power transportation</p>
            <button  className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">Book Now</button>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img className=" rounded-t-2xl h-[250px]"
              src={Van}
              alt="Image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
                Ven
              <div className="badge badge-secondary">Trending</div>
            </h2>
            <p>Rikshaw is a two-wheeler that is used for transportation. It is
                a two-wheeler that is used for transportation.</p>
            <p>Capacity: Typically Seats 2-4 person</p>
            <p>Feature: Open-air seating, pedal power transportation</p>
            <button  className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">Book Now</button>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img className=" rounded-t-2xl h-[250px]"
              src={GorurGari}
              alt="Image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Gorur Gari
              <div className="badge badge-secondary">Trending</div>
            </h2>
            <p>Rikshaw is a two-wheeler that is used for transportation. It is
                a two-wheeler that is used for transportation.</p>
            <p>Capacity: Typically Seats 4-5 person</p>
            <p>Feature: Open-air seating, pedal power transportation</p>
            <button  className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">Book Now</button>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img className=" rounded-t-2xl h-[250px]"
              src={Boat}
              alt="Image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Boat
              <div className="badge badge-secondary">Trending</div>
            </h2>
            <p>Rikshaw is a two-wheeler that is used for transportation. It is
                a two-wheeler that is used for transportation.</p>
            <p>Capacity: Typically Seats 8-10 person</p>
            <p>Feature: Open-air seating, pedal power transportation</p>
            <button  className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transportation;
