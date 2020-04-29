/* eslint-disable react/prop-types */
import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.community_id} className="list-group-item">
          {post.community_name}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
