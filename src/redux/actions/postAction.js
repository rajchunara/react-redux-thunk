import {
  FETCH_POST_FAILURE,
  FETCH_POST_SUCCESS,
  FETCH_POST_REQUEST,
} from '../actionTypes/postTypes';
import axios from 'axios';

export const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

export const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: posts,
  };
};

export const fetchPostFailure = (err) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: err,
  };
};

//In this action we will return function and
//this fuction does not have to be pure function
//It can make async requests
export const fetchPosts = () => {
  //this function gets dispatch method as argument
  return (dispatch) => {
    dispatch(fetchPostRequest());

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        dispatch(fetchPostSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchPostFailure(err.message));
      });
  };
};
