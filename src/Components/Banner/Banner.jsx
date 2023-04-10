import React from 'react';

const Banner = ({children}) => {
    return (
        <div className='w-full bg-teal-50 mb-10 p-20 text-center'>
       <h2 className='text-3xl font-bold'> {children}</h2>
        </div>
    );
};

export default Banner;