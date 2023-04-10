import React from 'react';
import { useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page">
           <div className='text-center mt-40'>
           <h1 className='text-3xl text-red-500 font-bold '>Oops!</h1>
           <div className='text-xl'>
           <p>link is not working</p>
           <p>please try again later!</p>
           </div>
          
          <p className='text-teal-500 text-5xl'>
          <i>{error.statusText || error.message}</i>
          </p>
           </div>
      </div>
    );
};

export default Error;