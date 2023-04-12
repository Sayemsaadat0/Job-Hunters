import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import JobItem from './JobItem';


const AppliedJobs = () => {

const {newStore} = useLoaderData()


    return (
        <div>
            <Banner>Applied Jobs</Banner>
          <div >
          {newStore.length}
            {
                newStore.map(jobs => <JobItem key={jobs.id} jobs={jobs}></JobItem>)

            }
          </div>
        </div>
    );
};

export default AppliedJobs;
















