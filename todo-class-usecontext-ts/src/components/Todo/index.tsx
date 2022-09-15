import React, { useState } from 'react';
import TodoModal from '../TodoModal';
import { TodoContext, actions } from '../../store';
import './styles.scss';

interface TodoProps {
  title: string;
  description: string;
  index: number;
}

interface TodoState {
  title: string;
  description: string;
}

export default class Todo extends React.Component<TodoProps, TodoState> {
  state: TodoState = {
    title: '',
    description: '',
  };

  deleteTodoLocal = (index: number) => {
    this.context.removeTodo({
      index,
    });
  };
  static contextType = TodoContext;
  context!: React.ContextType<typeof TodoContext>;
  render() {
    console.log(this.props.title, this.props.description);

    return (
      <div>
        <div className='todo mb-3 d-flex justify-content-between'>
          <div className='todo_text mb-3 d-flex flex-column'>
            <h3>{this.props.title}</h3>
            <h5>
              {this.state.description.length > 10
                ? `${this.state.description.substring(0, 10)}...`
                : this.props.description}
            </h5>
          </div>
          <div
            className='my-auto edit_btn'
            onClick={() => this.deleteTodoLocal(this.props.index)}
          >
            <div>
              <span className='fas fa-trash'></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
