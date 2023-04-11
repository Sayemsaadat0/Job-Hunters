import React from 'react';
const HeaderBanner = () => {
    return (
        <div className=' md:flex justify-center items-center bg-teal-50'>
            <div className='md:mx-40'>
                <h1 className='text-5xl  md:w-96 font-bold '>
                One Step Closer To Your  <br /><span className='text-teal-400'>Dream Job</span>
                </h1>
                <p className='my-5 w-80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, rerum.!</p>
                <button className='btn bg-teal-500 hover:bg-amber-500 border-0 '><small>Get Started</small></button>
            </div>

            <div className=''>
                <img className='md:w-full' src="Search-Cristina_prev_ui.png" alt="" />
            </div>
        </div>
    );
};

export default HeaderBanner;