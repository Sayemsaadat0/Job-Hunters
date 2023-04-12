import React from 'react';
import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page">
            <div>
            <img className='w-1/3 mx-auto mt-20' src="errors.png" alt="" />
         {/* <p className='text-center font-semibold text-2xl'> <i>{error.statusText || error.message}</i> </p> */}
            </div>
        
      </div>
    );
};

export default Error;









