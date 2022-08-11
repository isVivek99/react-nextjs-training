import React from 'react';
import { actions } from './action';

interface Todo {
  error?: Error;
  title: string;
  description: string;
  id?: number;
  index?: number;
}
interface TodoArray {
  todos: Todo[];
  dispatchTodo?: any;
  addTodo?: any;
  removeTodo?: any;
}

const initialState: TodoArray = { todos: [] };
export const TodoContext = React.createContext(initialState);

// const TodoReducer = (
//   state: TodoArray = initialState,
//   action: { type: string; payload: Todo }
// ) => {
//   switch (action.type) {
//     case actions.addTodo:
//       return {
//         todos: [...state.todos, action.payload],
//         error: '',
//       };
//     case actions.deleteTodo:
//       const filteredArray = state.todos.filter(
//         (ele, ind) => ind !== action.payload.index
//       );
//       return {
//         todos: [...filteredArray],
//         error: '',
//       };

//     default:
//       return { todos: [...state.todos], error: new Error('Unhandled Action') };
//   }
// };

// const TodoProvider = ({ children }: any) => {
//   const [state, dispatchTodo] = React.useReducer(
//     TodoReducer,
//     initialState,
//     () => {
//       const locaData = localStorage.getItem('todoState');
//       return locaData ? JSON.parse(locaData) : { todos: [] };
//     }
//   );

//   React.useEffect(() => {
//     localStorage.setItem(
//       'todoState',
//       JSON.stringify(state.todos ? { todos: state.todos } : { todos: [] })
//     );
//   }, [state]);

//   return (
//     <TodoContext.Provider value={{ ...state, dispatchTodo }}>
//       {children}
//     </TodoContext.Provider>
//   );
// };

class TodoProvider extends React.Component<any, TodoArray> {
  state = initialState;

  addTodo = (payload: Todo) => {
    console.log(payload);

    const tempState = { todos: [...this.state.todos, payload] };

    this.setState(tempState);
  };

  removeTodo = (payload: Todo) => {
    const filteredArray = this.state.todos.filter(
      (_ele, ind) => ind !== payload.index
    );
    this.setState({ todos: filteredArray });
  };

  componentDidMount() {
    localStorage.setItem(
      'todoState',
      JSON.stringify(
        this.state.todos ? { todos: this.state.todos } : { todos: [] }
      )
    );
  }
  componentDidUpdate(prevProps: any, prevState: any) {
    console.log(prevState, prevProps);
  }

  render() {
    return (
      <TodoContext.Provider
        value={{
          ...this.state,
          addTodo: this.addTodo,
          removeTodo: this.removeTodo,
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

export { TodoProvider };
