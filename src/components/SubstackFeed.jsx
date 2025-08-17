import React, { useEffect, useState } from 'react';
import './SubstackFeed.css';
import Accordion from 'react-bootstrap/Accordion';

const SubstackFeed = () => {
  const [posts, setPosts] = useState([]);

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

  return (
    <Accordion>
      {posts.map((post, index) => (
        <Accordion.Item eventKey={index.toString()} key={index}>
          <Accordion.Header>{post.title}</Accordion.Header>
          <Accordion.Body>
            <p className="substack-paragraph">
              <strong>Published:</strong> {new Date(post.pubDate).toLocaleDateString()}
            </p>
            <p className="substack-paragraph">
              {post.description.replace(/<[^>]+>/g, '').slice(0, 200)}...
            </p>
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default SubstackFeed;