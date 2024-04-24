/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=' flex flex-col justify-center items-center'>
            <h2 className=' text-9xl text-red-400 text-center'>404 Not Found</h2>
            <li className=' btn btn-outline btn-warning'>
                <Link to='/'>Go to Home</Link>
            </li>
        </div>
    );
};

export default Error;