import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
              <div className="navbar bg-teal-50 md:px-52">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li> <Link className='m-2' to='/'>Home</Link> </li>
        <li> <Link className='m-2' to='/statistics'>Statistics</Link></li>
        <li>  <Link className='m-2' to='/appliedjobs'>Applied Jobs</Link></li>
        <li> <Link className='m-2' to='/blogs'>Blogs</Link></li>
      </ul>

    </div>
    <h3 className='text-3xl font-bold'>JobHunters</h3>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li> <Link className='m-2' to='/'>Home</Link></li>
      <li tabIndex={0}>
      <Link className='m-2' to='/statistics'>Statistics</Link>
      </li>
      <li> <Link className='m-2' to='/appliedjobs'>Applied Jobs</Link> </li>
      <li>  <Link className='m-2' to='/blogs'>Blogs</Link> </li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className='btn px-2 bg-teal-500 border-0'><small>Start Applying</small></button>
  </div>
</div>
        </div>
    );
};

export default Navbar;




