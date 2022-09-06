import React from 'react';
import { loadPosts } from '../actions/postActions';
import { useAppDispatch } from '../redux/';

interface usePostSearchArgs {
  pageNumber: number;
}

export default function usePostSearch({ pageNumber }: usePostSearchArgs) {
  //distpatch redux-thunk action
  const dispatch = useAppDispatch();

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [posts, setPosts] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(false);

  React.useEffect(() => {
    // @ts-ignore
    dispatch(loadPosts(pageNumber));
  }, [pageNumber]);

  return null;
}
