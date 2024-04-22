/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import TopServices from './TopServices';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('services.json')
         .then(res => res.json())
         .then(data => setServices(data))
    },[])
    return (
        <div>
           {
            services.map(service => <TopServices key={service._id} service={service}></TopServices> )
           }
        </div>
    );
};

export default Services;