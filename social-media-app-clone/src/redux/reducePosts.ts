import types from './actionTypes';

interface Post {
  title: String;
  subTitle: String;
  url: string;
}

interface Posts {
  userPosts: Array<Post>;
}

const defaultPostsState: Posts = {
  userPosts: [],
};
const reducePosts = (
  state = defaultPostsState,
  action: { type: string; payload: Post | Array<Posts> }
) => {
  switch (action.type) {
    case types.LOAD_POSTS_SUCCESS: {
      return {
        userPosts: Array.isArray(action.payload) ? [...action.payload] : [],
      };
    }
    case types.ADD_POSTS_SUCCESS: {
      return {
        userPosts: [...state.userPosts, action.payload],
      };
    }
    default:
      return state;
  }
};

export default reducePosts;
