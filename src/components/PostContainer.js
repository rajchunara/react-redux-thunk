import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions/postAction';
import PostItem from './PostItem';

export default function PostContainer() {
  const postsState = useSelector((state) => state.posts);
  const { loading, posts, error } = postsState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const showLoading = loading ? (
    <div>...Loading</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    posts.map((item) => <PostItem key={item.id} post={item} />)
  );

  return <div>{showLoading}</div>;
}
