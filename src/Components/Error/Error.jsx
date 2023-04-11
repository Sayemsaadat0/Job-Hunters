import React from 'react';
import { useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page ">
            <div>
            <img className='w-1/3 mx-auto my-auto my-52' src="errors.png" alt="" />
            </div>
            
      </div>
    );
};

export default Error;



