import React from 'react';
interface PostImageProps {
  url: string;
}

const PostImage = ({ url }: PostImageProps) => {
  return (
    <div>
      <img
        className='d-block w-100'
        src={url}
        alt='First slide'
        style={{ aspectRatio: '16/9', objectFit: 'contain' }}
      />
    </div>
  );
};

export default PostImage;
