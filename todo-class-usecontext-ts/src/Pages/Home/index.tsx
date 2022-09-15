import React from 'react';
import TodoModal from '../../components/TodoModal';
import TodoList from '../../components/TodoList';
import { TodoContext } from '../../store';
import './styles.scss';

interface Todo {
  title: '';
  description: '';
}
interface MyState {
  showModal: boolean;
  todos: Todo[];
}
export default class Home extends React.Component<any, MyState> {
  state: MyState = {
    showModal: false,
    todos: [],
  };

  handleOnClose = () => {
    this.setState({ showModal: false });
  };

  static contextType = TodoContext;
  context!: React.ContextType<typeof TodoContext>;

  render() {
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
            <div
              className='btn_todo_add'
              onClick={() => this.setState({ showModal: true })}
            >
              <span className='home_screen_btn_hover'>+</span>
            </div>
          </div>
          {this.state.showModal && (
            <TodoModal
              onClose={this.handleOnClose}
              actionBtnTitle='save'
              newTodo={true}
            />
          )}

          <section className='todos'>
            <TodoList />
          </section>
        </main>
      </div>
    );
  }
}
