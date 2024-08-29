import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const fetchPost = async (id) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_POINT}/post/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw new Error('Error fetching post');
  }
};

const BlogDetail = () => {
  const { id } = useParams();

  const { data: post, error, isLoading } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPost(id),
    enabled: !!id, 
  });

  if (isLoading) {
    return (
      <div className="spinner-border mx-auto mt-5" role="status" style={{ marginBottom: '100px' }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!post) {
    return <div>No post found</div>;
  }

  return (
    <div className='container mb-5'>
      {post.image ? (
        <img src={`${import.meta.env.VITE_API_POINT}/${post.image}`} alt={post.title} className='img-fluid' />
      ) : (
        <div>No image available</div>
      )}
      <h1>{post.title}</h1>
      <h3>{post.description}</h3>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogDetail;
