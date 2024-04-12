import React from "react";

const TopServices = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto grid md:grid-cols-2">
      <div className="card card-side bg-base-100 shadow-xl ">
        <figure className=" w-1/2">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
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
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
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
