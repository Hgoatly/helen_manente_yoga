import React from 'react';
import './Blogs.css';

function Blogs() {
    return(
        <>
        <div className="blog-page">
          <h1 className="blog-title">
            Helen Manente Yoga Blogs
          </h1>
          <SubstackFeed />
        </div>
        </>
    )
}

export default Blogs;

import SubstackFeed from './SubstackFeed';


