import {
  FETCH_POST_FAILURE,
  FETCH_POST_SUCCESS,
  FETCH_POST_REQUEST,
} from '../actionTypes/postTypes';

const intialState = {
  loading: false,
  posts: [],
  error: '',
};

const postReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: '',
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;
