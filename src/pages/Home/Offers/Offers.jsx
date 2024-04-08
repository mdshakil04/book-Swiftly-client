/* eslint-disable no-unused-vars */
import React from 'react';

const Offers = () => {
    return (
        <div className=' my-4'>
            <h1 className='text-3xl text-center border-y-4 max-w-xs container mx-auto'>Travel more, spend less</h1>
            <p className=' text-center mb-4'>Promotions, deals, and special offers for you</p>
            <div className=' grid md:grid-cols-4 gap-4 p-4'>
                <div className=' border-2 border-blue-900 rounded-3xl p-4'>
                    <h1 className="text-xl">Genius</h1>
                    <p>You are at <span className=' font-bold'>Genius Level 1</span> in<br></br> our loyalty program</p>
                </div>
                <div className=' border-2 border-blue-900 rounded-3xl p-4'>
                    <h1 className="text-xl">10% discounts on stays</h1>
                    <p>Enjoy discounts at participating properties worldwide</p>
                </div>
                <div className=' border-2 border-blue-900 rounded-3xl p-4'>
                    <h1 className="text-xl">10% off rental cars</h1>
                    <p>Save on select rental cars</p>
                </div>
                <div className=' border-2 border-blue-900 rounded-3xl p-4'>
                    <h1 className="text-xl">15% discounts on stays</h1>
                    <p>Complete 5 bookings to unlock Genius Level 2</p>
                </div>
            </div>
        </div>
    );
};

export default Offers;