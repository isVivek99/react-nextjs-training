import types from './actionTypes';

interface UserLoggedIn {
  email: string;
  password: string;
  token: string;
}
interface UserLoggedInObject {
  userDetails: UserLoggedIn;
  token?: string;
  userLoggedIn: boolean;
}

const defaultUserState: UserLoggedInObject = {
  userDetails: { email: '', password: '', token: '' },
  userLoggedIn: false,
};

const reduceUsers = (
  state = defaultUserState,
  action: { type: string; payload: UserLoggedIn }
) => {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return {
        userDetails: { ...action.payload },
        // token: action.payload.token,
        userLoggedIn: true,
      };

    case types.LOGOUT_USER:
      console.log('action-fired');
      return {
        userDetails: {},
        token: '',
        userLoggedIn: false,
      };

    case types.REFRESH_TOKEN:
      console.log('action-fired');
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};

export default reduceUsers;
