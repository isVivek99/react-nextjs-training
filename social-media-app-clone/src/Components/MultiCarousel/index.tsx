import React from 'react';
import Carousel from 'react-multi-carousel';
import Card from 'react-bootstrap/Card';
import 'react-multi-carousel/lib/styles.css';
import Image from '../Image';
import './styles.scss';
const responsive = {
  // the naming can be any, depends on you.

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MultiCarousel = () => {
  return (
    <Card style={{ width: '29rem' }} className='me-5'>
      <Carousel responsive={responsive}>
        <Image
          isListElement={false}
          imgUrl='/assets/images/profile-pics/insta-dp.jpeg'
        />
        <Image
          isListElement={false}
          imgUrl='/assets/images/profile-pics/insta-dp.jpeg'
        />
        <Image
          isListElement={false}
          imgUrl='/assets/images/profile-pics/insta-dp.jpeg'
        />
        <Image
          isListElement={false}
          imgUrl='/assets/images/profile-pics/insta-dp.jpeg'
        />
        <Image
          isListElement={false}
          imgUrl='/assets/images/profile-pics/insta-dp.jpeg'
        />
        <Image
          isListElement={false}
          imgUrl='/assets/images/profile-pics/insta-dp.jpeg'
        />
        <Image
          isListElement={false}
          imgUrl='/assets/images/profile-pics/insta-dp.jpeg'
        />
      </Carousel>
    </Card>
  );
};

export default MultiCarousel;
