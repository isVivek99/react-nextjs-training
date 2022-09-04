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

// export const addPost = (post: any) => (dispatch: Dispatch) => {
//   console.log(post);
//   const headerObject = {
//     Accept: 'application/json',
//     'Content-type': 'application/json',
//   };
//   try {
//     axios.request({
//       method: 'post',
//       url: 'http://localhost:4011/api/createPost',
//       headers: headerObject,
//       data: post,
//     });
//   } catch (error: any) {
//     console.log(error.message);
//   }
// };

export const loadPosts = () => async (dispatch: Dispatch) => {
  try {
    const resp: any = await axios.request({
      method: 'get',
      url: 'http://localhost:4011/api/createPost',
    });
    console.log(resp.data.posts);

    dispatch({ type: types.LOAD_POSTS_SUCCESS, payload: resp.data.posts });
  } catch (error: any) {
    console.log(error.message);
  }
};
