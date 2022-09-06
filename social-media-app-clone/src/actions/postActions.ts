import types from '../redux/actionTypes';
import { Dispatch } from 'redux';
import axios from 'axios';

export const loadPostsStart = () => ({
  type: types.LOAD_POSTS_LOADING,
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

export const loadPosts = (pageNumber: number) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: types.LOAD_POSTS_LOADING,
    });

    const resp: any = await axios.request({
      method: 'get',
      url: `http://localhost:4000/api/getPost?page=${pageNumber}`,
    });
    console.log(resp.data.posts);

    dispatch({
      type: types.LOAD_POSTS_SUCCESS,
      payload: { pageNumber: pageNumber, userPosts: resp.data.posts },
    });
  } catch (error: any) {
    dispatch({
      type: types.LOAD_POSTS_ERROR,
      payload: 'failed to load!!',
    });
    console.log(error.message);
  }
};
