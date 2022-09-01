import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
interface UploadFileModalProps {
  show: boolean;
  onHide: () => any;
}

const UploadFileModal = ({ show, onHide }: UploadFileModalProps) => {
  const [title, setTitle] = React.useState();
  const [subTitle, setSubTitle] = React.useState();
  const [file, setFile] = React.useState('');
  const [url, setUrl] = React.useState('');
  const postDetails = async () => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'insta-clone');
    data.append('cloud_name', 'dtn8fwwj7');
    try {
      const resp: { url: string } = await axios.post(
        'https://api.cloudinary.com/v1_1/dtn8fwwj7/image/upload',
        data
      );
      setUrl(resp.url);
    } catch (error: any) {
      alert(error.message);
    }

    onHide();
  };
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
        <InputGroup hasValidation>
          <InputGroup.Text>title</InputGroup.Text>
          <Form.Control
            type='text'
            required
            isInvalid
            onChange={(e: any) => setTitle(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            Please enter a title.
          </Form.Control.Feedback>
        </InputGroup>
        <InputGroup hasValidation>
          <InputGroup.Text>caption</InputGroup.Text>
          <Form.Control
            type='text'
            required
            isInvalid
            onChange={(e: any) => setSubTitle(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            Please enter a subtitle.
          </Form.Control.Feedback>
        </InputGroup>
        <Form.Group controlId='formFileSm' className='mb-3'>
          <Form.Label>Small file input example</Form.Label>
          <Form.Control
            type='file'
            size='sm'
            onChange={(e: any) => setFile(e.target.files[0])}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-between'>
        <Button onClick={onHide}>Close</Button>
        <Button onClick={postDetails}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UploadFileModal;
