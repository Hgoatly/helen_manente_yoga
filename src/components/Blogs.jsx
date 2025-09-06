import React from 'react';
import './Blogs.css';

function Blogs() {
    return(
        <>
        <div className="blog-page">
          <h1 className="blog-title">
            Helen Manente Notes on Yoga
          </h1>
          <p>Welcome to Notes on Yoga, my Substack publication. It’s my place to share anything yoga, music and Tolkien related that takes my fancy! Here you’ll find a range of blogs, including pose breakdowns, philosophical ramblings and writings about new events and projects. You are, of course, able to read them here, but I’d LOVE it if you’d subscribe on Substack too.</p>
          <SubstackFeed />
        </div>
        </>
    )
}

export default Blogs;

import SubstackFeed from './SubstackFeed';


