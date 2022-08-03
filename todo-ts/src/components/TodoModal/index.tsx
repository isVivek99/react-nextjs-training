import React, { useState, useEffect } from 'react';
import './styles.scss';

interface TodoModalProps {
  onClose: () => unknown;
  setTodos?: any;
  actionBtnTitle: string;
  todo?: any;
  newTodo: boolean;
  index?: number;
}

const TodoModal = ({
  onClose,
  setTodos,
  actionBtnTitle,
  todo,
  newTodo = true,
  index,
}: TodoModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [errors, setErrors] = useState({
    title: '',
    description: '',
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setErrors({
      title: '',
      description: '',
    });

    //* form validation
    if (title.trim() === '' && description.trim() === '') {
      setErrors((prev) => ({
        ...prev,
        title: 'Title is required',
        description: 'Description is required',
      }));
    } else if (title.trim() === '') {
      setErrors((prev) => ({ ...prev, title: 'Title is required' }));
    } else if (description.trim() === '') {
      setErrors((prev) => ({
        ...prev,
        description: 'Description is required',
      }));
    } else {
      if (newTodo) {
        setTodos((prev: any) => [...prev, { title, description }]);
        onClose();
      } else {
        setTodos((prev: any) => {
          let tempArr = [...prev];
          tempArr.splice(index ? index : 0, 1, { title, description });
          return tempArr;
        });
        onClose();
      }
    }
  };

  useEffect(() => {
    setTitle(todo ? todo.title : '');
    setDescription(todo ? todo.description : '');
  }, [todo]);

  return (
    <div className='modal-overlay modal-overlay-active'>
      <div className='todomodal padding-default mx-auto'>
        <div className='todomodal_inputs'>
          <div className=' my-1'>
            <input
              type='text'
              className='todomodal_input'
              placeholder='Add a title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {errors.title && <p className='form-error-text'>{errors.title}</p>}
          <div className='my-1'>
            <textarea
              className='todomodal_input'
              placeholder='Add a description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {errors.description && (
            <p className='form-error-text'>{errors.description}</p>
          )}
          <div>
            <div className='d-flex justify-content-between my-2'>
              <div className='btn toastmodal_btn' onClick={() => onClose()}>
                <p>cancel</p>
              </div>
              <div className='btn toastmodal_btn' onClick={handleSubmit}>
                <p className='toastmodal_btn_text'>{actionBtnTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
