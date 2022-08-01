import React from 'react';
import './styles.scss';

const Home = () => {
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
          <div className='btn_todo_add'>
            <span className='home_screen_btn_hover'>+</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
