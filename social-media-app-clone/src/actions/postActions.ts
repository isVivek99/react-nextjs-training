import types from '../redux/actionTypes';
import { Dispatch } from 'redux';
import axios from 'axios';

export const loadPostsStart = () => ({
  type: types.LOAD_POSTS_START,
});

export const loadPostsSuccess = (posts: any) => ({
  type: types.LOAD_POSTS_SUCCESS,
  payload: posts,
});
export const loadGPostsError = () => ({
  type: types.LOAD_POSTS_ERROR,
});

export const addPostsStart = () => ({
  type: types.ADD_POSTS_START,
});
export const addPostsSuccess = (payload: any) => ({
  type: types.ADD_POSTS_SUCCESS,
  payload,
});
export const addPostsError = () => ({
  type: types.ADD_POSTS_ERROR,
});

export const loadPosts = () => async (dispatch: Dispatch) => {
  try {
    const resp: any = await axios.request({
      method: 'get',
      url: 'http://localhost:4000/api/createPost',
    });
    console.log(resp.data.posts);

    dispatch({ type: types.LOAD_POSTS_SUCCESS, payload: resp.data.posts });
  } catch (error: any) {
    console.log(error.message);
  }
};
