import React from 'react';
import { useSelector } from 'react-redux';
import rootReducer from '../../redux/index';
import Post from '../Post';

interface Post {
  title: string;
  subtitle: string;
  url: string;
}
interface Posts {
  userPosts: Post[];
}
const Posts = () => {
  type RootStore = ReturnType<typeof rootReducer>;
  const postsState: Posts =
    useSelector((state: RootStore) => state?.reducePosts) || [];
  console.log(postsState.userPosts, Array.isArray(postsState.userPosts));

  return (
    <div className='mt-2 me-5'>
      {postsState.userPosts.map((post: any, index: number) => (
        <Post
          key={index}
          title={post.title}
          subtitle={post.subtitle}
          url={post.url}
        />
      ))}
    </div>
  );
};

export default Posts;
