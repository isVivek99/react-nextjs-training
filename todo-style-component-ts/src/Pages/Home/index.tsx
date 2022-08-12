import { useState } from 'react';
import TodoModal from '../../components/TodoModal';
import TodoList from '../../components/TodoList';
import { useTodoContext } from '../../store';
import './styles.scss';
import styled from 'styled-components';

const StyledNewTodoBtn = styled.div`
  background-color: #282c34;
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledTodoHeader = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  margin-bottom: 2rem;
`;

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { todos, dispatchTodo } = useTodoContext();

  const handleOnClose = () => {
    setShowModal(false);
  };

  const deleteTodo = (index: number) => {
    let tempArray = [...todos];
    tempArray.splice(index, 1);
  };
  return (
    <div className='home'>
      <div className='home_header'>
        <h1>Todo app</h1>
      </div>

      <main className='home_screen'>
        <div className='todo_list_header'>
          <div className='todo_list_header_text'>
            <StyledTodoHeader>Todo List</StyledTodoHeader>
          </div>

          <StyledNewTodoBtn onClick={() => setShowModal(true)}>
            <span className='home_screen_btn_hover'>+</span>
          </StyledNewTodoBtn>
        </div>
        {showModal && (
          <TodoModal
            onClose={handleOnClose}
            setTodos={dispatchTodo}
            actionBtnTitle='save'
            newTodo={true}
          />
        )}

        <section className='todos'>
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </section>
      </main>
    </div>
  );
};

export default Home;
