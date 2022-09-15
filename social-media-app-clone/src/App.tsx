import Home from './Pages/Home';
import Login from './Components/Login';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProtectedRoute from './Components/protectedRoutes';
import rootReducer from './redux/index';

interface userDetails {
  fName: string;
  email: string;
}
interface userObject {
  userDetails: userDetails;
  userLoggedIn: boolean;
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/login' element={<Login />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
