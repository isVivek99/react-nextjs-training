import React, { useState } from 'react';
import TodoModal from '../TodoModal';
import { useTodoContext, actions } from '../../store';
import './styles.scss';
import styled from 'styled-components';

interface TodoProps {
  title: string;
  description: string;
  index: number;
  deleteTodo: (index: number) => void;
}

const StyledTodo = styled.div`
  padding: 0 1rem;
  border: 1px solid #282c34;
  border-radius: 1rem;
  .todo_text {
    color: #000;
  }
  .fas {
    color: #282c34;
  }
  &:hover {
    background-color: #282c34;
    transition: 0.3s ease-in;
    border-radius: 1rem;
    .todo_text {
      color: #fff;
    }
    .fas {
      color: #fff;
    }
  }
`;

const Todo = ({ title, description, index, deleteTodo }: TodoProps) => {
  const { todos, dispatchTodo } = useTodoContext();
  const [showEditModal, setShowEditModal] = useState(false);
  const [todo, setTodos] = useState({
    title: '',
    description: '',
  });

  const deleteTodoLocal = (index: number) => {
    deleteTodo(index);
    dispatchTodo({ type: actions.deleteTodo, payload: { index } });
  };
  const handleEditModalOnClose = () => {
    setShowEditModal(false);
  };

  return (
    <div>
      {showEditModal && (
        <TodoModal
          onClose={handleEditModalOnClose}
          actionBtnTitle='update'
          todo={todo}
          newTodo={false}
          index={index}
        />
      )}

      <StyledTodo className=' mb-3 d-flex justify-content-between'>
        <div className='todo_text mb-3 d-flex flex-column'>
          <h3>{title}</h3>
          <h5>
            {description.length > 10
              ? `${description.substring(0, 10)}...`
              : description}
          </h5>
        </div>
        <div
          className='my-auto edit_btn'
          onClick={() => deleteTodoLocal(index)}
        >
          <div>
            <span className='fas fa-trash'></span>
          </div>
        </div>
      </StyledTodo>
    </div>
  );
};

export default Todo;
