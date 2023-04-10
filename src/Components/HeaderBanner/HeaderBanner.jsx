import React from 'react';
const HeaderBanner = () => {
    return (
        <div className=' md:flex justify-center items-center '>
            <div className='md:mx-40'>
                <h1 className='text-5xl  md:w-60 font-bold '>
                One Step Closer To Your <span className='text-sky-400'>Dream Job</span>
                </h1>
                <p className='my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, rerum.!</p>
                <button className='btn btn-primary'>Get Started</button>
            </div>

            <div className=''>
                <img className='md:w-full' src="headerImage.jpg" alt="" />
            </div>
        </div>
    );
};

export default HeaderBanner;