/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import TopServices from "./TopServices";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center border-y-4 max-w-xs container py-4 mx-auto">
        Our Top Services
      </h1>
      <p className=" text-center mb-4">
        Enjoy Local peoples daily life and foods.
      </p>
      <div className=" lg:flex  gap-4">
        {services.map((service) => (
          <TopServices key={service._id} service={service}></TopServices>
        ))}
      </div>
    </div>
  );
};

export default Services;
