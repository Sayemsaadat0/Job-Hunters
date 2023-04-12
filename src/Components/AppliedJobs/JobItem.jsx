import React from 'react';
import { Link } from 'react-router-dom';

const JobItem = ({jobs}) => {
    const {companyLogo,jobTitle,companyName,isRemoteOrOnsite,location,isFulltime,salary} = jobs
   
    
    return (
<div className=' grid grid-cols-3 w-9/12 mx-auto items-center shadow-lg  hover:shadow-teal-400 ease-in-out duration-500 rounded-md m-10 hover:scale-110'>
            <div className=''>
                  <img className='' src={companyLogo} alt="s" /> 
                 </div>
                 <div>
                  <h1><span className='font-semibold'>job title : </span> {jobTitle}</h1>
                  <p className='text-xl'>{companyName}</p>
                  <div className='flex'>
                  <p className='badge'>{isRemoteOrOnsite}</p>
                  <p className='badge'>{isFulltime}</p>
                  </div>
                  <div>
                      <p>locaton : {location} </p>
                      <p>salary : {salary}</p>
                  </div>
                 </div>
                 <div className='text-right p-4'>
                 <Link to={`/${jobs.id}`}>
  <button className="btn bg-teal-500 hover:bg-amber-500 border-0 md:w-1/3 ">view details</button>
  </Link>
                 </div>
                
        </div>


      
    );
};

export default JobItem;