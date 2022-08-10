import React from 'react';
import { actions } from './action';

interface Todo {
  error?: Error;
  title: string;
  description: string;
  id: number;
  index?: number;
}
interface TodoArray {
  todos: Todo[];
  dispatchTodo?: any;
}

const initialState: TodoArray = { todos: [] };
const TodoContext = React.createContext(initialState);

const TodoReducer = (
  state: TodoArray = initialState,
  action: { type: string; payload: Todo }
) => {
  switch (action.type) {
    case actions.addTodo:
      return {
        todos: [...state.todos, action.payload],
        error: '',
      };
    case actions.deleteTodo:
      const filteredArray = state.todos.filter(
        (ele, ind) => ind !== action.payload.index
      );
      return {
        todos: [...filteredArray],
        error: '',
      };

    default:
      return { todos: [...state.todos], error: new Error('Unhandled Action') };
  }
};

const TodoProvider = ({ children }: any) => {
  const [state, dispatchTodo] = React.useReducer(
    TodoReducer,
    initialState,
    () => {
      const locaData = localStorage.getItem('todoState');
      return locaData ? JSON.parse(locaData) : { todos: [] };
    }
  );

  React.useEffect(() => {
    localStorage.setItem(
      'todoState',
      JSON.stringify(state.todos ? { todos: state.todos } : { todos: [] })
    );
  }, [state]);

  return (
    <TodoContext.Provider value={{ ...state, dispatchTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = () => React.useContext(TodoContext);

export { TodoProvider, useTodoContext };
