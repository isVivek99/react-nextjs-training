import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from '../Button';
import BootstrapCarousel from '../Carousel';
import './styles.scss';
const Post = () => {
  return (
    <Card style={{ width: '29rem' }} className='mx-auto my-2'>
      <Card.Header>
        <Row>
          <Col sm={10}>
            <Row className='align-items-center'>
              <Col sm={1}>
                <span className='card_header_img_container'>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      '/assets/images/posts/post_logo.jpeg'
                    }
                    alt='brfootball'
                  />
                </span>
              </Col>
              <Col>
                <div className='px-2 bold'>brfootball</div>
              </Col>
            </Row>
          </Col>
          <Col className='text-end'>
            <i className='fas fa-ellipsis'></i>
          </Col>
        </Row>
      </Card.Header>

      <BootstrapCarousel />
      <Card.Body>
        <Row className='pb-1'>
          <Col sm={4}>
            <Row>
              <div className='col-3'>
                <i className='fas fa-heart f-24 fa-inactive'></i>
              </div>
              <div className='col-3'>
                <i className='fas fa-comment f-24 fa-inactive'></i>
              </div>
              <div className='col-3'>
                <i className='fas fa-paper-plane f-24 fa-inactive'></i>
              </div>
            </Row>
          </Col>
          <Col sm={6}></Col>
          <Col sm={2} className='text-end'>
            <i className='fas fa-bookmark f-24 fa-inactive'></i>
          </Col>
        </Row>
        <Row className='pb-1'>
          <Card.Text className='f-14'>
            Liked by <span className='bold'>rutyaa_joshi</span> and{' '}
            <span className='bold'> 354,696 others</span>
          </Card.Text>
        </Row>
        <Row className='pb-2'>
          <Card.Text className='f-14'>
            <span className='bold page_owner'>brfootball </span> Yann Sommer
            made a Bundesliga-record 19 saves in Mönchengladbach's draw against
            Bayern Munich 🚫
          </Card.Text>
        </Row>
        <Row className='pb-1'>
          <Card.Text className='f-14 color__gray mb-1'>
            View all 914 comments
          </Card.Text>
          <Card.Text className='f-12 color__gray'>2d ago</Card.Text>
        </Row>
      </Card.Body>

      <section className='user_comment'>
        <Form className='d-flex py-2 align-items-center'>
          <div className='px-2'>
            <i
              className='fas fa-face-smile f-24 fa-inactive'
              aria-hidden='true'
            ></i>
          </div>
          <textarea
            aria-label='add a comment'
            placeholder='Add a comment...'
            autoComplete='off'
            autoCorrect='off'
            className='comment_input f-14'
          />
          <Button title='Post' titleSize='f-16' />
        </Form>
      </section>
    </Card>
  );
};

export default Post;
