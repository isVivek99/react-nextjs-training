import { useState } from 'react';
import TodoModal from '../../components/TodoModal';
import TodoList from '../../components/TodoList';
import { useTodoContext, actions } from '../../store';
import './styles.scss';

interface Todo {
  title: '';
  description: '';
}
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const { todos, dispatchTodo } = useTodoContext();
  // const [todos, setTodos] = useState<Todo[]>([]);

  const handleOnClose = () => {
    setShowModal(false);
  };

  const deleteTodo = (index: number) => {
    let tempArray = [...todos];
    tempArray.splice(index, 1);
    // setTodos(tempArray);
  };
  return (
    <div className='home'>
      <div className='home_header'>
        <h1>Todo app</h1>
      </div>
      <main className='home_screen'>
        <div className='todo_list_header'>
          <div className='todo_list_header_text'>
            <h2>Todo List</h2>
          </div>
          <div className='btn_todo_add' onClick={() => setShowModal(true)}>
            <span className='home_screen_btn_hover'>+</span>
          </div>
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
