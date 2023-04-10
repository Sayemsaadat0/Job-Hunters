import React from 'react';

const FeaturedJob = ({data,showAllData,handleSeeMoreClick}) => {
    return (
        <div className='mx-auto '>
          <div className='md:grid grid-cols-2 '>
      {data.slice(0, 4).map(item => (
        <div key={item.id}>

<div className="card md:w-96  md:m-12 mb-5 bg-base-100 shadow-xl">
<img className='w-40' src={item.companyLogo} alt="" />
  <div className="card-body px-0 py-2">
    <h2 className="card-title">{item.jobTitle}</h2>
    <p><small>{item.companyName}</small></p>
    <div className='flex w-60'>
    <p  className='badge badge-outline my-2'>{item.isRemoteOrOnsite}</p>
    <p className='badge  my-2 mx-2'>{item.isFulltime}</p>
    </div>
    <div className='flex justify-between text-lg '>
        <p>Location : {item.location}</p>
        <p>Salary : {item.salary}</p>
    </div>
    <button className="btn bg-teal-500 border-0 md:w-1/3">view details</button>
  </div>
</div>
 </div>
 ))}
    </div>
     <div>
     {showAllData && (
        <div className='mx-auto md:grid grid-cols-2' >
          {data.map(item => (
            <div className='' key={item.id}>
        
                 <div className="card md:m-12 mb-5 bg-base-100 shadow-xl">
<img className='w-40' src={item.companyLogo} alt="" />
  <div className="card-body px-0 py-2">
    <h2 className="card-title">{item.jobTitle}</h2>
    <p><small>{item.companyName}</small></p>
    <div className='flex w-60'>
    <p  className='badge badge-outline my-2'>{item.isRemoteOrOnsite}</p>
    <p className='badge  my-2 mx-2'>{item.isFulltime}</p>
    </div>
    <div className='flex justify-between text-lg '>
        <p>Location : {item.location}</p>
        <p>Salary : {item.salary}</p>
    </div>
    <button className="btn bg-teal-500 border-0 md:w-1/3">view details</button>
  </div>
</div>

        
            </div>
          ))}
        </div>
      )}
     </div>


    <div className=' text-center'>
     {!showAllData && (
        <button className="btn bg-teal-500 border-0 md:w-2/12 mb-10 mt-5" onClick={handleSeeMoreClick}>See More</button>
      )}
        </div> 
        </div>
    );
};

export default FeaturedJob;