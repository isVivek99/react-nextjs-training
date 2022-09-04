import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Col, Row, InputGroup } from 'react-bootstrap';
import { loadPosts } from '../../actions/postActions';
import { useAppDispatch } from '../../redux';

import axios from 'axios';
interface Values {
  title: string;
  file: any;
}
interface UploadFileModalProps {
  show: boolean;
  onHide: () => any;
}

const UploadFileModal = ({ show, onHide }: UploadFileModalProps) => {
  //distpatch redux-thunk action
  const dispatch = useAppDispatch();

  const [title, setTitle] = React.useState('');
  const [subTitle, setSubTitle] = React.useState('asd');
  const [validated, setValidated] = React.useState(false);
  const [file, setFile] = React.useState('');

  const postDetails = async () => {
    console.log('call api');

    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'insta-clone');
    data.append('cloud_name', 'dtn8fwwj7');
    try {
      const resp: { data: { url: string } } = await axios.post(
        'https://api.cloudinary.com/v1_1/dtn8fwwj7/image/upload',
        data
      );
      console.log(resp);
      await updateBackend(resp.data.url);
      // @ts-ignore
      dispatch(loadPosts());
    } catch (error: any) {
      alert(error.message);
    }

    onHide();
  };

  const updateBackend = async (url: string) => {
    const body = { title, subTitle, url };
    let resp;
    console.log(body);
    const headerObject = {
      'Content-type': 'application/json',
    };
    try {
      resp = await axios.request({
        method: 'post',
        url: 'http://localhost:4011/api/createPost',
        headers: headerObject,
        data: body,
      });
      return resp;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    console.dir(event.currentTarget.checkValidity());

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    event.preventDefault();
    setValidated(true);
  };

  React.useEffect(() => {
    if (validated) {
      console.log('call');

      postDetails();
      setValidated(false);
    }
  }, [validated]);

  return (
    <Modal
      show={show}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>upload</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId='validationCustom01'>
            <Form.Label>title</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='beautiful sunrise'
              onChange={(e: any) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='formFileSm' className='my-3'>
            <Form.Control
              type='file'
              size='sm'
              onChange={(e: any) => setFile(e.target.files[0])}
            />
          </Form.Group>
          <Modal.Footer className='d-flex justify-content-between'>
            <Button onClick={onHide}>Close</Button>
            <Button type='submit'>Submit</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UploadFileModal;
