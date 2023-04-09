import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center md:mx-48 md:my-10'>
           <div>
           <h3 className='text-2xl font-semibold'>JobHunters</h3>
           </div>

            <div className=''>
                <Link className='m-2' to='/'>Home</Link>
                <Link className='m-2' to='/statistics'>Statistics</Link>
                <Link className='m-2' to='/appliedJobs'>Applied Jobs</Link>
                <Link className='m-2' to='/blogs'>Blogs</Link>
            </div>

            <div>
            <button className="btn px-2 py-0 text-xs  "><small>Start Applying</small></button>
            </div>
        </nav>
    );
};

export default Navbar;