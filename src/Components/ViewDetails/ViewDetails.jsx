import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';
import FeaturedData from '../../../public/featuredlist.json'
import { addToDb } from '../utilities/fakedb';

const ViewDetails = () => {
const {viewdetailsId} = useParams()

const selectedItem = FeaturedData.find(item => item.id  === (viewdetailsId));

const {jobTitle,location,salary,jobDescription,jobResponsibility,educationalBackgrounds,experience ,phone, email , id} = selectedItem


const handleLocalStorage = (id) => {
    addToDb(id)
} 



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

            <div className=' md:w-60 p-2 card shadow-md shadow-teal-200 border-2  hover:scale-110 duration-700  hover:shadow-teal-500'>
                <h2 className= 'border-b-2 border-b-slate-400 p-4 text-2xl font-bold'>Job Details</h2>
                <p className='mx-4 my-2  font-bold'> {jobTitle}</p>  
                <p className='mx-4 '> <span className='font-semibold'>salary </span>: {salary}</p>
                <p className='p-4 border-b-2 border-b-slate-400 font-bold text-2xl'> Contact info :</p>
                <p className='m-2'><span className='font-semibold'>phone</span> : {phone}</p>
                <p className='m-2'><span className='font-semibold'>email</span> : {email}</p>
                <p className='m-2'><span className='font-semibold'>Addrress</span> : {location}</p>
                <div>
                    <button onClick={()=>handleLocalStorage(id)} className='btn w-full bg-teal-500 border-0 hover:bg-yellow-200 text-black'>Apply Now</button>
                </div>
            </div>
           </div>
           
               
         
        </div>
    );
};

export default ViewDetails;