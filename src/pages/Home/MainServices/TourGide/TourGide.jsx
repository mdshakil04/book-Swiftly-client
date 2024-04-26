/* eslint-disable no-unused-vars */
import React from "react";
import brandonEich from "../../../../assets/Images/Tourgide/Brendan-Eich.jpg";
import DawightMerriman from "../../../../assets/Images/Tourgide/Dwight-Merriman.jpg";
import GuidoVan from "../../../../assets/Images/Tourgide/Guido-van.jpg";
import JordanWalke from "../../../../assets/Images/Tourgide/Jordan-Walke.jpg";

const TourGide = () => {
  return (
    <div className=" my-8 ">
      <h1 className="text-3xl text-center border-y-4 max-w-xs container py-4 mx-auto">
        Embark on Adventure
      </h1>
      <p className=" text-center mb-4">
        Celebrate Culture, Discover Wonders, with Our Team of Expert Guides!
      </p>
      <div className=" flex flex-col justify-center items-center p-4 gap-4">
        <div className="card lg:card-side mt-2 border-r-2 border-t-2 ">
          <figure className=" lg:w-2/6 lg:h-full ">
            <img src={brandonEich} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-3xl">Guide Profile</h2>
            <h2 className="text-3xl">Name: Brandon Eich</h2>
            <p>
              <span className=" underline">Experience: </span>{" "}
              <span className=" font-bold"> 10+</span> years guiding historical
              tours in Bangladesh
            </p>
            <p>
              <span className=" underline">Languages: </span>Fluent in English,
              Spanish, and Catalan.
            </p>
            <p>
              <span className=" underline">Expertise: </span>Specializes in
              Gothic Quarter, La Sagrada Família, and Park Güell.
            </p>
            <p>
              <span className=" underline">Availability: </span> Flexible
              scheduling, customized tours available.
            </p>
            <p>
              <span className=" underline">Contact: </span>{" "}
              brandonEich@example.com | +123-456-7890
            </p>
            <button className=" btn lg:w-1/6 btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">Explore Tours</button>
          </div>
        </div>
        <div className="card lg:card-side mt-2 border-r-2 border-t-2">
          <figure className=" lg:w-2/6 lg:h-full ">
            <img src={DawightMerriman} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-3xl">Guide Profile</h2>
            <h2 className="text-3xl">Name: Dawight</h2>
            <p>
              <span className=" underline">Experience: </span>{" "}
              <span className=" font-bold"> 2+</span> years guiding historical
              tours in Bangladesh
            </p>
            <p>
              <span className=" underline">Languages: </span>Fluent in English,
              Spanish, and Catalan.
            </p>
            <p>
              <span className=" underline">Expertise: </span>Specializes in
              Gothic Quarter, La Sagrada Família, and Park Güell.
            </p>
            <p>
              <span className=" underline">Availability: </span> Flexible
              scheduling, customized tours available.
            </p>
            <p>
              <span className=" underline">Contact: </span>{" "}
              brandonEich@example.com | +123-456-7890
            </p>
            <button className="btn lg:w-1/6 btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">Explore Tours</button>
          </div>
        </div>
        <div className="card lg:card-side mt-2 border-r-2 border-t-2">
          <figure className="lg:w-2/6 lg:h-full">
            <img src={GuidoVan} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-3xl">Guide Profile</h2>
            <h2 className="text-3xl">Name: GuidoVan</h2>
            <p>
              <span className=" underline">Experience: </span>{" "}
              <span className=" font-bold"> 5+</span> years guiding historical
              tours in Bangladesh
            </p>
            <p>
              <span className=" underline">Languages: </span>Fluent in English,
              Spanish, and Catalan.
            </p>
            <p>
              <span className=" underline">Expertise: </span>Specializes in
              Gothic Quarter, La Sagrada Família, and Park Güell.
            </p>
            <p>
              <span className=" underline">Availability: </span> Flexible
              scheduling, customized tours available.
            </p>
            <p>
              <span className=" underline">Contact: </span>{" "}
              brandonEich@example.com | +123-456-7890
            </p>
            <button className="btn lg:w-1/6 btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">Explore Tours</button>
          </div>
        </div>
        <div className="card lg:card-side mt-2 border-r-2 border-t-2">
          <figure className="lg:w-2/6 lg:h-full ">
            <img src={JordanWalke} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-3xl">Guide Profile</h2>
            <h2 className="text-3xl">Name: JordanWalke</h2>
            <p>
              <span className=" underline">Experience: </span>{" "}
              <span className=" font-bold"> 8+</span> years guiding historical
              tours in Bangladesh
            </p>
            <p>
              <span className=" underline">Languages: </span>Fluent in English,
              Spanish, and Catalan.
            </p>
            <p>
              <span className=" underline">Expertise: </span>Specializes in
              Gothic Quarter, La Sagrada Família, and Park Güell.
            </p>
            <p>
              <span className=" underline">Availability: </span> Flexible
              scheduling, customized tours available.
            </p>
            <p>
              <span className=" underline">Contact: </span>{" "}
              brandonEich@example.com | +123-456-7890
            </p>
            <button className=" btn w-1/6 btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">Explore Tours</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourGide;
