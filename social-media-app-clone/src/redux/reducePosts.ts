import types from './actionTypes';

interface Post {
  title: String;
  subTitle: String;
  url: string;
}

interface Posts {
  userPosts: Array<Post>;
  pageNumber: number;
  loading: boolean;
  error: string;
  hasMore: boolean;
}

const defaultPostsState: Posts = {
  userPosts: [],
  pageNumber: 0,
  loading: false,
  error: '',
  hasMore: true,
};
const reducePosts = (
  state = defaultPostsState,
  action: { type: string; payload: Posts }
) => {
  switch (action.type) {
    case types.LOAD_POSTS_LOADING: {
      return {
        ...state,
        loading: true,
        error: '',
        hasMore: true,
      };
    }

    case types.LOAD_POSTS_SUCCESS: {
      return {
        pageNumber: action.payload.pageNumber,
        loading: false,
        error: '',
        hasMore: action.payload.userPosts.length > 0,
        userPosts:
          state.pageNumber !== action.payload.pageNumber
            ? [...state.userPosts, ...action.payload.userPosts]
            : [...state.userPosts],
      };
    }

    case types.LOAD_POSTS_ERROR: {
      return {
        ...state,
        loading: false,
        hasMore: false,
        error: action.payload.error,
      };
    }

    case types.ADD_POST: {
      return {
        ...state,
        userPosts: [...state.userPosts, action.payload],
      };
    }

    default:
      return state;
  }
};

export default reducePosts;
