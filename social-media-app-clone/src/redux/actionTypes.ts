const asyncActions: any = {
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  ADD_USER: 'ADD_USER',
  LOGOUT_USER: 'LOGOUT_USER',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
  LOAD_POSTS_LOADING: 'LOAD_POSTS_START',
  LOAD_POSTS_SUCCESS: 'LOAD_POSTS_SUCCESS',
  LOAD_POSTS_ERROR: 'LOAD_POSTS_ERROR',
  ADD_POST: 'ADD_POST',
};

const syncActions: any = {};

const actionTypes = {
  ...asyncActions,
  ...syncActions,
};

export default actionTypes;
