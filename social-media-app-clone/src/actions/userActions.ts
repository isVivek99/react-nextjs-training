import types from '../redux/actionTypes';

//user login & logout

export const loginUserSuccess = (loggedInUserInfo: any) => {
  console.log('info:', loggedInUserInfo);

  return {
    type: types.LOGIN_USER_SUCCESS,
    payload: {
      fName: loggedInUserInfo.given_name,
      email: loggedInUserInfo.email,
    },
  };
};

export const logoutUser = () => ({
  type: types.LOGOUT_USER,
  payload: {},
});

//async actions
export const loginUser = (userInfo: any) => ({
  type: types.LOGIN_USER,
  payload: {
    email: userInfo.email.emailAddress,
    password: userInfo.password.password,
  },
});
