import React from 'react';
import { useSelector } from 'react-redux';
import rootReducer from '../../redux/index';
import Post from '../Post';
import { loadPosts } from '../../actions/postActions';
import { useAppDispatch } from '../../redux';
import usePostSearch from '../../customHooks/usePostSearch';

const PostsUI = () => {
  //distpatch redux-thunk action
  const dispatch = useAppDispatch();

  type RootStore = ReturnType<typeof rootReducer>;
  const { userPosts, loading, hasMore }: any =
    useSelector((state: RootStore) => state?.reducePosts) || [];
  console.log(
    userPosts,

    Array.isArray(userPosts)
  );

  const [pageNumber, setPageNumber] = React.useState(1);
  const observer = React.useRef<IntersectionObserver | null>(null);

  const lastItemRef = React.useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        console.log(entries);

        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPage: number) => prevPage + 1);
        }
      });

      if (node) {
        console.log(node);

        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );

  React.useEffect(() => {
    // @ts-ignore
    dispatch(loadPosts(pageNumber));
  }, [pageNumber]);

  return (
    <div className='mt-2 me-5'>
      {userPosts.map((post: any, index: number) => {
        if (userPosts.length === index + 1) {
          return (
            <Post
              ref={lastItemRef}
              key={index}
              title={post.title}
              subtitle={post.subtitle}
              url={post.url}
            />
          );
        } else {
          return (
            <Post
              key={index}
              title={post.title}
              subtitle={post.subtitle}
              url={post.url}
            />
          );
        }
      })}
    </div>
  );
};

export default PostsUI;
