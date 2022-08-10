import React from 'react';
import Todo from '../Todo';
import { useTodoContext, actions } from '../../store';
interface TodoProps {
  title: '';
  description: '';
}

const TodoList = ({ deleteTodo }: any) => {
  const { todos, dispatchTodo } = useTodoContext();

  return (
    <div>
      <section className='todos'>
        {todos?.map(
          (item: { title: string; description: string }, index: number) => (
            <div key={index}>
              <Todo
                title={item.title}
                description={item.description}
                deleteTodo={deleteTodo}
                index={index}
              />
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default TodoList;
