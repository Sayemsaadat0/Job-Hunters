import React, { useEffect, useState } from 'react';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import CatagoryList from '../CatagoryLists/CatagoryList';
import CatagoryLists from '../CatagoryLists/CatagoryLists';
import FeaturedJob from '../FeaturedJobs/FeaturedJob';



const Home = () => {
 const [data, setData] = useState([])

 const [showAllData, setShowAllData] = useState(false);
 const handleSeeMoreClick = () => {
  setShowAllData(true);
};

 useEffect(()=>{
  fetch('featuredlist.json')
  .then(res=> res.json())
  .then(data=>setData(data))
 }  ,[])
  
const catagorylists = useLoaderData()


  return (
        <div className='home-page'>
          <HeaderBanner></HeaderBanner>
         {/* catagory container */}
          <div className='catagory-list-container'>
            <CatagoryLists></CatagoryLists>
            <div className='md:flex justify-around w-9/12  mx-auto'>
            {
              catagorylists.map(list => <CatagoryList key={list.id}list={list} ></CatagoryList>)
            }
            </div>
          </div>

          {/* featured job */}
          <FeaturedJobs></FeaturedJobs>
          <div>
           <FeaturedJob showAllData={showAllData} setShowAllData={setShowAllData} handleSeeMoreClick={handleSeeMoreClick} data={data} ></FeaturedJob>
          </div>
         
          <Footer></Footer>
        </div>
    );
};

export default Home;






/* 
<div className='text-center m-20'>
            <h1 className='text-2xl font-bold
            '>Job Catagory list </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, id.</p>
            <div className='w-9/12 md:flex justify-around mx-auto my-10'>

            <div className="card w-96 bg-base-100 shadow-xl">
                <img src="" alt="s" />
                 <div className="card-body">
                   <h2 className="card-title"> </h2>
                   <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>

            </div>
        </div>

*/