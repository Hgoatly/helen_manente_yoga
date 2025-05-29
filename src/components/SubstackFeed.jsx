import React, { useEffect, useState } from 'react';

const SubstackFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://helenmanenteyoga.substack.com/feed'
        );
        const data = await response.json();
        setPosts(data.items.slice(0, 5)); // Show latest 5 posts
      } catch (error) {
        console.error('Error fetching Substack feed:', error);
      }
    };

    fetchFeed();
  }, []);

  return (
    <div>
      <h2>Latest Substack Posts</h2>
      {posts.map((post, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            <h3>{post.title}</h3>
          </a>
          <p>{new Date(post.pubDate).toLocaleDateString()}</p>
          <p>{post.description.replace(/<[^>]+>/g, '').slice(0, 200)}...</p>
        </div>
      ))}
    </div>
  );
};

export default SubstackFeed;
