import React, { useState, useEffect } from 'react';
import { useTodoContext, actions } from '../../store';
import './styles.scss';
import styled from 'styled-components';

interface TodoModalProps {
  onClose: () => unknown;
  setTodos?: any;
  actionBtnTitle: string;
  todo?: any;
  newTodo: boolean;
  index?: number;
}

const StyledTodoModal = styled.div`
  width: 40%;
  border: 1px solid #ccc;
  border-radius: 1rem;
  background-color: #fff;
`;

const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  padding: 0.5rem;
  min-width: 90%;
  max-width: 90%;
  max-height: 400px;
  padding: 1rem;
`;

const StyledInputTextArea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  padding: 0.5rem;
  min-width: 90%;
  max-width: 90%;
  max-height: 400px;
  padding: 1rem;
`;

const StyledTodoModalInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  padding-bottom: 0;
  min-height: calc(100% - 20px);
  min-width: calc(100% - 20px);
  border-radius: 1rem;
  background-color: #fff;
`;

const ModalBtn = styled.div`
  background-color: #282c34;
  color: #fff;
  padding: 0.5rem;
  border-radius: 4px;
`;

const TodoModal = ({
  onClose,
  setTodos,
  actionBtnTitle,
  todo,
  newTodo = true,
  index,
}: TodoModalProps) => {
  const { todos, dispatchTodo } = useTodoContext();
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
        dispatchTodo({
          type: actions.addTodo,
          payload: { title, description },
          id: Math.floor(Math.random() * 100),
        });
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
      {/* <div className='todomodal padding-default mx-auto'> */}
      <StyledTodoModal>
        <StyledTodoModalInputs>
          <div className=' my-1'>
            <StyledInput
              type='text'
              className='todomodal_input'
              placeholder='Add a title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {errors.title && <p className='form-error-text'>{errors.title}</p>}
          <div className='my-1'>
            <StyledInputTextArea
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
              <ModalBtn className='btn' onClick={() => onClose()}>
                <p>cancel</p>
              </ModalBtn>
              <ModalBtn className='btn' onClick={handleSubmit}>
                <p className='toastmodal_btn_text' data-testid='todoModal'>
                  {actionBtnTitle}
                </p>
              </ModalBtn>
            </div>
          </div>
        </StyledTodoModalInputs>
      </StyledTodoModal>
      {/* </div> */}
    </div>
  );
};

export default TodoModal;
