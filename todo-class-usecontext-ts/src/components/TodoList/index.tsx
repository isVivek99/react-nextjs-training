import React from 'react';
import Todo from '../Todo';
import { TodoContext, actions } from '../../store';

export default class TodoList extends React.Component<any, any> {
  static contextType = TodoContext;
  context!: React.ContextType<typeof TodoContext>;
  render() {
    return (
      <div>
        <section className='todos'>
          {this.context.todos?.map(
            (item: { title: string; description: string }, index: number) => (
              <div key={index}>
                <Todo
                  title={item.title}
                  description={item.description}
                  index={index}
                />
              </div>
            )
          )}
        </section>
      </div>
    );
  }
}
