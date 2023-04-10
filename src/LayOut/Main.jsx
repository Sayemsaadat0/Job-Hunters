import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Main = () => {
    return (
        <div className='w-100% md:mx-40 '>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;