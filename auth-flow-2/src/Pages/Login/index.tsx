import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button';
import Input from '../../components/input';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import rootReducer from '../../redux';
import { loginUserSuccess, logoutUser } from '../../actions';
interface userDetails {
  fName: string;
  email: string;
}
interface userObject {
  userDetails: userDetails;
  userLoggedIn: boolean;
}
const Login = () => {
  const dispatch = useDispatch();

  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    getAccessTokenSilently,
    getIdTokenClaims,
  } = useAuth0();
  type RootStore = ReturnType<typeof rootReducer>;

  const { userDetails, userLoggedIn }: userObject =
    useSelector((state: RootStore) => state?.reduceUsers) || {};

  const handleLoginUser = () => {
    loginWithRedirect();
  };

  const handleLogoutUser = () => {
    logout({ returnTo: window.location.origin });
    dispatch(logoutUser());
  };

  const callAPI = () => {};
  const callProtectedAPI = () => {};

  const getAccessToken = async () => {
    const token = await getAccessTokenSilently();
    const IDtoken = await getIdTokenClaims();
    console.log('IDtoken:', IDtoken);
    console.log('accesstoken:', token);
  };
  React.useEffect(() => {
    console.log(isAuthenticated, user);
    getAccessToken();
    if (isAuthenticated) dispatch(loginUserSuccess(user));
  }, [dispatch, isAuthenticated, user]);
  return (
    <>
      {!userLoggedIn ? (
        <div className='screen login'>
          <div className='col-12 col-md-5col-lg-10  mb-4 mx-auto p-4 login__modal'>
            <h2>Login</h2>

            <div className='mt-3 w-100'>
              <Button
                type={'pri'}
                size={'mid'}
                text={'login'}
                width={'100'}
                clickHandle={() => handleLoginUser()}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className='screen'>
          <div className='d-flex justify-content-between align-items-center mb-5 p-2 p-sm-5'>
            <Link to={'/'}>
              <div className='d-none d-sm-block'>
                <img src='' alt='brandImage' />
              </div>
              <div className='d-block d-sm-none'>
                <img src='' alt='brandImage' className='mobile__brand__logo' />
              </div>
            </Link>
            <Link to={'/'}>
              <Button text={'explore'} type={'pri'} size={'mid'} />
            </Link>
          </div>

          <div className='user_logged_in_info col-10 mx-auto'>
            <div className='user_logged_in'>
              <p>username: {userDetails.fName}</p>
              <p>userEmail: {userDetails.email}</p>
              <div className='mt-3 py-5 w-100'>
                <Button
                  type={'pri'}
                  size={'mid'}
                  text={'logout'}
                  width={'100'}
                  clickHandle={() => handleLogoutUser()}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <ul>
        <li>
          <button>Call API route</button>
        </li>
        <li>
          <button>Call Protected API route</button>
        </li>
      </ul>
    </>
  );
};
export default Login;
