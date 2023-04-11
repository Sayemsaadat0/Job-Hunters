import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import { getShoppingCart } from '../utilities/fakedb';
import featurejobs from '../../../public/featuredlist.json'
// import Job from './Job';

const AppliedJobs = () => {
        // const storedData = getShoppingCart()
    
            

    return (
        <div>
            <Banner>Applied Jobs</Banner>
          <div className='flex w-9/12 mx-auto justify-around items-center border-2 shadow-lg hover:bg-cyan-100 hover:shadow-yellow-200 ease-in-out duration-500 rounded-md'>

          <div>
                 <img src="a" alt="a" />
                 </div>
                 <div>
                  <h1>job title </h1>
                  <p>company</p>
                  <p className='badge'>ontime</p>
                  <div>
                      <p>locatons </p>
                      <p>salary</p>
                  </div>
                 </div>
                 <button >a</button>

          </div>
        </div>
    );
};

export default AppliedJobs;














