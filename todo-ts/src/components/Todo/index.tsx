import React, { useState } from 'react';
import TodoModal from '../TodoModal';
import './styles.scss';
interface TodoProps {
  title: string;
  description: string;
  index: number;
  deleteTodo: (index: number) => void;
  setTodos: any;
}

const Todo = ({
  title,
  description,
  index,
  deleteTodo,
  setTodos,
}: TodoProps) => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [todo, setTodo] = useState({
    title: '',
    description: '',
  });
  const toggleDropdown = () => {
    setDropdownStatus((prev) => !prev);
  };

  const deleteTodoLocal = (index: number) => {
    deleteTodo(index);
    toggleDropdown();
  };
  const handleEditModalOnClose = () => {
    setShowEditModal(false);
  };
  const openEditModal = () => {
    setShowEditModal((prev) => !prev);
    setTodo({ title, description });
  };

  return (
    <div>
      {showEditModal && (
        <TodoModal
          onClose={handleEditModalOnClose}
          setTodos={setTodos}
          actionBtnTitle='update'
          todo={todo}
          newTodo={false}
          index={index}
        />
      )}

      <div className='todo mb-3 d-flex justify-content-between'>
        <div className='todo mb-3 d-flex flex-column'>
          <h3 style={{ color: '#000' }}>{title}</h3>
          <h5 style={{ color: '#000' }}>
            {description.length > 10
              ? `${description.substring(0, 10)}...`
              : description}
          </h5>
        </div>
        <div
          className='my-auto edit_btn'
          style={{ color: '#000' }}
          onClick={toggleDropdown}
        >
          <div>
            <span className='fas fa-ellipsis-vertical'></span>
          </div>
          {dropdownStatus && (
            <div className='todo_dropdown'>
              <div className='dropdown__content' onClick={openEditModal}>
                <p className='mb-0 py-1 ps-2'>edit</p>
              </div>
              <div
                className='dropdown__content'
                onClick={() => deleteTodoLocal(index)}
              >
                <p className='mb-0  py-1 ps-2'>delete</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
