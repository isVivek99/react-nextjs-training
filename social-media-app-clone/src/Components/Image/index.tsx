import React from 'react';
import './styles.scss';

interface ImageProps {
  isListElement: boolean;
  imgUrl: string;
}

const Image = ({ isListElement, imgUrl }: ImageProps) => {
  return (
    <div>
      <div className={` ${isListElement ? 'list_user_img' : 'user_img'}`}>
        <img src={process.env.PUBLIC_URL + `${imgUrl}`} alt='' />
      </div>
    </div>
  );
};

export default Image;
