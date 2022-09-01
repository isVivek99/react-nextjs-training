import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col } from 'react-bootstrap';
import SuggestionBoxListEle from '../SuggestionBoxListElement';
import Button from '../Button';
import './styles.scss';
const SuggestionBox = () => {
  return (
    <div className='my-2'>
      <SuggestionBoxListEle
        title='vivek_lokhande'
        subtitle='Vivek Lokhande'
        imgUrl='/assets/images/profile-pics/insta-dp.jpeg'
        btnText='Switch'
        isListElement={false}
      />
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <Row>
            <Col className='fw-bold f-14 color__gray' sm={8}>
              Suggestions for you
            </Col>
            <Col className='fw-bold f-14 text-end' sm={4}>
              See all
            </Col>
          </Row>
        </ListGroup.Item>
        <SuggestionBoxListEle
          title='vivek_lokhande'
          subtitle='Followed by o_pathak_bua + 2 '
          imgUrl='/assets/images/profile-pics/insta-dp.jpeg'
          btnText='Follow'
          isListElement={true}
        />
        <SuggestionBoxListEle
          title='vivek_lokhande'
          subtitle='Followed by o_pathak_bua + 2 '
          imgUrl='/assets/images/profile-pics/insta-dp.jpeg'
          btnText='Follow'
          isListElement={true}
        />
        <SuggestionBoxListEle
          title='vivek_lokhande'
          subtitle='Followed by o_pathak_bua + 2 '
          imgUrl='/assets/images/profile-pics/insta-dp.jpeg'
          btnText='Follow'
          isListElement={true}
        />
      </ListGroup>
    </div>
  );
};

export default SuggestionBox;
