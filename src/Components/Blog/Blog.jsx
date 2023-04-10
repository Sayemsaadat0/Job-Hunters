import React from 'react';
import Blogans from '../Blogans/Blogans';
import Banner from '../Banner/Banner';

const Blog = () => {
    return (
        <div className=' mx-auto'>
          <Banner>Blogs</Banner>
          <Blogans></Blogans>
        </div>
    );
};

export default Blog;