import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from '../Button';
import Image from '../Image';
import './styles.scss';

interface SuggestionBoxListEleProps {
  title: string;
  subtitle: string;
  btnText: string;
  imgUrl: string;
  isListElement: boolean;
}
const SuggestionBoxListEle = ({
  title,
  subtitle,
  btnText,
  imgUrl,
  isListElement,
}: SuggestionBoxListEleProps) => {
  return (
    <div>
      {' '}
      <Row
        className={` ${
          isListElement ? 'suggestionbox_list_ele' : 'suggestionbox'
        } align-items-center ${isListElement ? 'my-1' : 'my-3'} `}
      >
        <Col sm={isListElement ? 2 : 3}>
          <Image isListElement={isListElement} imgUrl={imgUrl} />
        </Col>
        <Col sm={7} style={{ flexGrow: 1 }}>
          <div className='bold f-14 username'>{title}</div>
          <div
            className={`username_actual color__gray ${
              isListElement ? 'f-12' : 'f-14'
            }`}
          >
            {subtitle}
          </div>
        </Col>
        <Col sm={2} className='px-0'>
          <Button title={btnText} titleSize='f-12' />
        </Col>
      </Row>
    </div>
  );
};

export default SuggestionBoxListEle;
