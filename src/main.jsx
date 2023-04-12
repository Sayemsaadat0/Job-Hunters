import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Main from './LayOut/Main';

import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog'
import Error from './Components/Error/Error';
import ViewDetails from './Components/ViewDetails/ViewDetails'
import { jobLoaders } from './Components/Loader/GetJobIdFromLocalStorage';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <Error></Error>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : () => fetch('catagorylist.json')
      },
      {
        path : '/:viewdetailsId',
        element : <ViewDetails></ViewDetails>,

      },
      {
        path : '/statistics',
        element : <Statistics></Statistics>
      },
      {
        path : '/appliedjobs',
        element : <AppliedJobs></AppliedJobs>,
        loader : jobLoaders
      },
     
      {
        path : '/blogs',
        element : <Blog></Blog>
      },
     
     
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
