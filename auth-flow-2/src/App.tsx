import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';

function App() {
  return (
    <div className='App'>
      <Link to={'/login'}>login</Link>
      <br />

      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
