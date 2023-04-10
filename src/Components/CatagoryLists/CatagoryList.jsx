import React from 'react';

const CatagoryList = ({list}) => {
  
    const {catagorylogo,cataoryTitle,jobsAvailable,id} = list
    return (
        <div>
           <div className=' md:flex justify-around mx-auto my-10'>
         <div className="card w-56 bg-base-100 shadow-xl p-4">
                <img className='w-20' src={catagorylogo} alt=""/>
            <div className="card-body px-2 py-0">
               <h2 className="pt-2 text-lg font-semibold">{cataoryTitle}</h2>
               <p><small>Available jobs : {jobsAvailable}</small></p>
            </div>
        </div>
        </div>
        </div>
    );
};

export default CatagoryList;