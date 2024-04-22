/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../../../assets/Images/Barishal/shruti-singh-zk1KY3GQEZA-unsplash.jpg";
import img2 from "../../../assets/Images/Barishal/girl-embroidered-dress-is-standing-yard-looking-into-sky.jpg";
import img3 from "../../../assets/Images/Festival/medium-shot-couple-hiking-together.jpg";
import img4 from "../../../assets/Images/Noakhali/rice-noodles-bowl-curry-paste-with-chili-cucumber-long-bean-lime-garlic-spring-onion.jpg";

// eslint-disable-next-line react/prop-types
const TopServices = ({service}) => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <h1 className="text-3xl text-center border-y-4 max-w-xs container py-4 mx-auto">
        Our Top Services
      </h1>
      <p className=" text-center mb-4">
        Enjoy Local pepoles daily life and foods.
      </p>
      <div className="  grid md:grid-cols-2 my-4 gap-4 p-4">
        <div className="card lg:card-side border">
          <figure>
            <img
            className=""
              src={img1}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Discover Local Food</h2>
            <p>Bangladeshi culinary habits were strongly influenced by the cuisine
            of the areas Mughal rulers. This includes rich, aromatic dishes such
            as biriyani and korma that require the use of a large array of
            spices along with a great deal of ghee.</p>
            <div className="card-actions">
            <p className=" font-bold">Price: Start from $<span className=" text-red-500">120</span></p>
            <button className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">Book Now</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side border">
          <figure>
            <img
            className=""
              src={img2}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Stay With Villagers</h2>
            <p> When guests visit a Bangladeshi home, they are usually offered a
            variety of traditional dishes, such as rice, fish, meat, lentils,
            and vegetables as well as snacks and sweets. But hospitality in
            Bangladesh goes beyond just food.</p>
            <div className="card-actions">
            <p className=" font-bold">Price: Start from $<span className=" text-red-500">220</span></p>
            <button className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">Book Now</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side border">
          <figure>
            <img
            className=" "
              src={img3}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Enjoy Village Festivals</h2>
            <p> Bangladesh is a country of colourful celebrations. We celebrate our
            faith, life, liberty, nature, elation, and achievements round the
            year through a wide variety of fairs and festivals, organized with
            inexorable enthusiasm and intricate details.</p>
            <div className="card-actions">
            <p className=" font-bold">Price: Start from $<span className=" text-red-500">180</span></p>
            <button className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">Book Now</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side border">
          <figure>
            <img
            className=""
              src={img4}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Learn Local Dishes</h2>
            <p>Bangladeshi culinary habits were strongly influenced by the cuisine
            of the areas Mughal rulers. This includes rich, aromatic dishes such
            as biriyani and korma that require the use of a large array of
            spices along with a great deal of ghee.</p>
            <div className="card-actions">
            <p className=" font-bold">Price: Start from $<span className=" text-red-500">150</span></p>
            <button className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
