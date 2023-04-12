import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import JobItem from './JobItem';


const AppliedJobs = () => {

  const {newStore} = useLoaderData()
const fillterButton = (isRemoteOrOnsite) => {
  if (isRemoteOrOnsite in newStore){
    
  }
}

    return (
        <div>
            <Banner>Applied Jobs</Banner>
          <div className=''>
            <div className='w-9/12 mx-auto text-right'>
            <div className="dropdown text-right">
  <button  className='btn bg-teal-400 border-0 hover:bg-teal-700'>Fillter by</button>
  <ul tabIndex={0} className="dropdown-content menu  shadow rounded-box w-52">
    <li className='bg-teal-700 text-white p-2'><a onClick={fillterButton}>Remote Jobs</a></li>
    <li className='bg-teal-700 text-white'><a>Full Time Jobs</a></li>
  </ul>

            </div>
         
</div>
          
            {
                newStore.map(jobs => <JobItem key={jobs.id} jobs={jobs}></JobItem>)

            }
          </div>
        </div>
    );
};

export default AppliedJobs;
















