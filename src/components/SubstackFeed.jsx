import React, { useEffect, useState } from 'react';
import './SubstackFeed.css';

const SubstackFeed = () => {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://helenmanenteyoga.substack.com/feed'
        );
        const data = await response.json();
        setPosts(data.items);
      } catch (error) {
        console.error('Error fetching Substack feed:', error);
      }
    };

    fetchFeed();
  }, []);

  // This runs every time posts or visibleCount change
  useEffect(() => {
    const addClassNameToParagraphs = () => {
        const paragrahs = document.querySelectorAll('.post-content p');
        paragrahs.forEach((p) => {
          p.classList.add('substack-paragraph');
        });
    }
    const addClassNameToImages = () => {
      const images = document.querySelectorAll('.post-content img');
      if (images.length > 0) {
        images[0].classList.add('substack-image-first');
        images.forEach((img) => {
            if(img.classList.contains('substack-image-first')) return; // Skip the first image
        img.classList.add('substack-image');
      });
    }
      
       // Add a specific class to the first image
    };
    addClassNameToParagraphs();
    addClassNameToImages();
  }, [posts, visibleCount]); // Runs again after render when new posts are shown

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      {posts.slice(0, visibleCount).map((post, index) => (
        <div key={index} style={{ marginBottom: '1rem' }} className="post-content">
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            <h3 className="post-title">{post.title}</h3>
          </a>
          <p>{new Date(post.pubDate).toLocaleDateString()}</p>
          <p>{post.description.replace(/<[^>]+>/g, '').slice(0, 200)}...</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}

      {visibleCount < posts.length && (
        <button onClick={handleLoadMore} style={{ marginTop: '1rem' }}>
          Load More
        </button>
      )}
    </div>
  );
};

export default SubstackFeed;
