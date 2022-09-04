import types from '../redux/actionTypes';

//toast
export const setToast = (toastInfo: any) => ({
  type: types.SET_TOAST,
  payload: { ...toastInfo, toastId: Math.floor(Math.random() * 100) },
});

export const closeToast = (id: number) => ({
  type: types.CLOSE_TOAST,
  payload: { id },
});

//user login & logout

export const loginUserSuccess = (loggedInUserInfo: any) => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: {
    fName: loggedInUserInfo.given_name,
    email: loggedInUserInfo.email,
  },
});

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

export const addUser = (userInfo: any) => ({
  type: types.ADD_USER,
  payload: {
    fName: userInfo.firstName.firstName,
    lName: userInfo.lastName.lastName,
    email: userInfo.email.emailAddress,
    password: userInfo.password.password,
  },
});
