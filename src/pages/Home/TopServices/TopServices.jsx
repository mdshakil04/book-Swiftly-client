/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../../../assets/Images/Barishal/shruti-singh-zk1KY3GQEZA-unsplash.jpg";
import img2 from "../../../assets/Images/Barishal/girl-embroidered-dress-is-standing-yard-looking-into-sky.jpg";
import img3 from "../../../assets/Images/Festival/festival-5973792_1920.jpg";
import img4 from "../../../assets/Images/Noakhali/rice-noodles-bowl-curry-paste-with-chili-cucumber-long-bean-lime-garlic-spring-onion.jpg";

const TopServices = () => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <h1 className="text-3xl text-center border-y-4 max-w-xs container py-4 mx-auto">
        Our Top Services
      </h1>
      <p className=' text-center mb-4'>Enjoy Local pepoles daily life and foods.</p>
      <div className="  grid md:grid-cols-2 my-4 gap-4">
        <div className="card card-side border ">
          <figure className=" w-1/2">
            <img className=" h-full" src={img1} alt="Movie" />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">Discover Local Food</h2>
            <p>
              Bangladeshi culinary habits were strongly influenced by the
              cuisine of the areas Mughal rulers. This includes rich, aromatic
              dishes such as biriyani and korma that require the use of a large
              array of spices along with a great deal of ghee. Dhaka was the
              Mughal capital of the Bengal Subah and a major trading center in
              South Asia.
            </p>
            <div className="card-actions ">
              <button className="btn btn-outline btn-primary">Book Now</button>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------- */}
        <div className="card card-side border ">
          <figure className=" w-1/2">
            <img className=" h-full" src={img2} alt="Movie" />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">Stay With Villagers</h2>
            <p>
              When guests visit a Bangladeshi home, they are usually offered a
              variety of traditional dishes, such as rice, fish, meat, lentils,
              and vegetables as well as snacks and sweets. But hospitality in
              Bangladesh goes beyond just food. The people of Bangladesh are
              known for their generosity and willingness to help others.
            </p>
            <div className="card-actions ">
              <button className="btn btn-outline btn-primary">Book Now</button>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------- */}
        <div className="card card-side border ">
          <figure className=" w-1/2">
            <img className=" h-full" src={img3} alt="Movie" />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">Enjoy Village Festivals</h2>
            <p>
              Bangladesh is a country of colourful celebrations. We celebrate
              our faith, life, liberty, nature, elation, and achievements round
              the year through a wide variety of fairs and festivals, organized
              with inexorable enthusiasm and intricate details. Some Bengali
              fairs and festivals have recorded history of over 2000 years.
            </p>
            <div className="card-actions ">
              <button className="btn btn-outline btn-primary">Book Now</button>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------- */}
        <div className="card card-side border ">
          <figure className=" w-1/2">
            <img className=" h-full" src={img4} alt="Movie" />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">Enjoy Village Festivals</h2>
            <p>
              Bangladeshi culinary habits were strongly influenced by the
              cuisine of the areas Mughal rulers. This includes rich, aromatic
              dishes such as biriyani and korma that require the use of a large
              array of spices along with a great deal of ghee. Dhaka was the
              Mughal capital of the Bengal Subah and a major trading center in
              South Asia.
            </p>
            <div className="card-actions ">
              <button className="btn btn-outline btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
