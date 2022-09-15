import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import './styles.scss';
const PostImage = React.lazy(() => import('../PostImage'));

interface BootstrapCarouselProps {
  url: string;
}

const BootstrapCarousel = ({ url }: BootstrapCarouselProps) => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  const onPrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else if (index === 0) return;
  };
  const onNextClick = () => {
    if (index === 2) {
      return;
    } else if (index === 0 || index > 0) {
      setIndex(index + 1);
    }
  };

  return (
    <Container className='px-0'>
      <div className='carousel-control d-flex justify-content-between'>
        <button className='carousel-btn-prev' onClick={onPrevClick}>
          <div className='carousel-btn-prev-wrapper'>
            <i className='fas fa-angle-left'></i>{' '}
          </div>
        </button>
        <button className='carousel-btn-next' onClick={onNextClick}>
          <div className='carousel-btn-next-wrapper'>
            <i className='fas fa-angle-right'></i>{' '}
          </div>
        </button>
      </div>
      <Carousel
        interval={null}
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
      >
        <Carousel.Item>
          <React.Suspense
            fallback={
              <img
                alt='suspense_img'
                src={
                  process.env.PUBLIC_URL +
                  '/assets/images/posts/suspense_image.jpeg'
                }
              />
            }
          >
            <PostImage url={url} />
          </React.Suspense>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d-block w-100'
            style={{ aspectRatio: '16/9', objectFit: 'contain' }}
            src={
              process.env.PUBLIC_URL + '/assets/images/posts/post_pic_1.jpeg'
            }
            alt='Second slide'
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d-block w-100'
            style={{ aspectRatio: '16/9', objectFit: 'contain' }}
            src={
              process.env.PUBLIC_URL + '/assets/images/posts/post_pic_1.jpeg'
            }
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default BootstrapCarousel;
