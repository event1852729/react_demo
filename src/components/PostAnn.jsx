import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Posts from './Posts';
import Pagination from './Pagination';

const AnnTitle = styled.h1`
font-weight:bold;
`;
function PostAnn() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://140.136.155.97//community/content.php');
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <AnnTitle>公告資訊</AnnTitle>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default PostAnn;
