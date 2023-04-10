import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';


const ViewDetails = () => {
const details = useLoaderData()
console.log(details)
  
    return (
        <div>
            <Banner>Job Details</Banner>
         
        </div>
    );
};

export default ViewDetails;