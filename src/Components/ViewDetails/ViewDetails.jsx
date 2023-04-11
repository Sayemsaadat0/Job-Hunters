import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';


const ViewDetails = () => {
const details = useLoaderData()
console.log(details)
  
    return (
        <div>
            <Banner>Job Details</Banner>
           <div className='md:flex md:w-9/12 md:mx-auto '>
            <div className='w-2/3'>
                <p className='m-2'> Job Description : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, aspernatur quae necessitatibus esse magnam placeat in illo quaerat debitis dignissimos! Cupiditate eveniet mollitia iusto libero voluptatum vitae, magnam repellendus minima!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quis repudiandae quaerat dolorem velit iste itaque iusto enim ipsa laudantium voluptas molestiae illum dicta accusamus ad deleniti rerum eum repellendus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, aspernatur quae necessitatibus esse magnam placeat in illo quaerat debitis dignissimos! Cupiditate eveniet mollitia iusto libero voluptatum vitae, magnam repellendus minima!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quis repudiandae quaerat dolorem velit iste itaque iusto enim ipsa laudantium voluptas molestiae illum dicta accusamus ad deleniti rerum eum repellendus.
                     </p>
                <p className='m-2'>Job Responsibility : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, aspernatur quae necessitatibus esse magnam placeat in illo quaerat debitis dignissimos! Cupiditate eveniet mollitia iusto libero voluptatum vitae, magnam repellendus minima!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quis repudiandae quaerat dolorem velit iste itaque iusto enim ipsa laudantium voluptas molestiae illum dicta accusamus ad deleniti rerum eum repellendus.</p>
                <p className='m-2'>Education : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, quibusdam.</p>
                <p className='m-2'>Experience : Lorem ipsum dolor sit amet.</p>

            </div>

            <div className='bg-sky-200 md:w-60 p-2'>
                <h2 className= 'border-b-2 border-b-slate-400 p-4'>title : job details</h2>
                <p className='mx-4 '> salary :Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tenetur.</p>
                <p className='mx-4 '> job title :Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tenetur.</p>
                <p className='p-4 border-b-2 border-b-slate-400'> Contact info :.</p>
                <p className='m-2'>phone00000000000.</p>
                <p className='m-2'>email : 00000000000000.</p>
                <p className='m-2'>Address : ajugrjhfhshshfjbbf</p>

            </div>
           </div>
         
        </div>
    );
};

export default ViewDetails;