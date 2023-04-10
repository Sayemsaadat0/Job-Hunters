import React from 'react';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import CatagoryList from '../CatagoryList/CatagoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Footer from '../Footer/Footer';



const Home = () => {
    return (
        <div className=''>
          <HeaderBanner></HeaderBanner>
          <CatagoryList></CatagoryList>
          <FeaturedJobs></FeaturedJobs>
          <Footer></Footer>
        </div>
    );
};

export default Home;