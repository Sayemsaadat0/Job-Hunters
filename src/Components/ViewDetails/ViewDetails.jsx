import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';
import FeaturedData from '../../../public/featuredlist.json'

const ViewDetails = () => {
const {viewdetailsId} = useParams()

const selectedItem = FeaturedData.find(item => item.id  ===(viewdetailsId));

const {jobTitle,companyName,isRemoteOrOnsite,location,isFulltime,salary,jobDescription,jobResponsibility,educationalBackgrounds,experience ,phone, email} = selectedItem




// const details = useLoaderData()
// console.log(details)
  
    return (
        <div>
            <Banner>Job Details</Banner>
           <div className='md:flex md:w-9/12 md:mx-auto '>
            <div className='w-2/3'>
                <p className='m-2'> <span className='font-bold'>Job Description</span> : {jobDescription}
                     </p>
                <p className='m-2'><span className='font-bold'>Job Responsibiity </span> : {jobResponsibility} </p>
                <p className='m-2'><span className='font-bold'>Educational Requirement</span> : {educationalBackgrounds}.</p>
                <p className='m-2'><span className='font-bold'>Experience</span> : {experience}</p>

            </div>

            <div className=' md:w-60 p-2 card shadow-md shadow-teal-300 border-2 bg-yellow-200'>
                <h2 className= 'border-b-2 border-b-slate-400 p-4 text-2xl font-bold'>Job Details</h2>
                <p className='mx-4 my-2  font-bold'> {jobTitle}</p>  
                <p className='mx-4 '> <span className='font-semibold'>salary </span>: {salary}</p>
                <p className='p-4 border-b-2 border-b-slate-400 font-bold text-2xl'> Contact info :</p>
                <p className='m-2'><span className='font-semibold'>phone</span> : {phone}</p>
                <p className='m-2'><span className='font-semibold'>email</span> : {email}</p>
                <p className='m-2'><span className='font-semibold'>Addrress</span> : {location}</p>

            </div>
           </div>
         
        </div>
    );
};

export default ViewDetails;