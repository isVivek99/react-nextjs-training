import React from 'react';

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import rootReducer from '../../redux/index';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

interface userDetails {
  fName: string;
  email: string;
}
interface userObject {
  userDetails: userDetails;
  userLoggedIn: boolean;
}

export default function ProtectedRoute({ children }: any) {
  type RootStore = ReturnType<typeof rootReducer>;
  const { userDetails, userLoggedIn }: userObject =
    useSelector((state: RootStore) => state?.reduceUsers) || {};

  if (userLoggedIn) {
    return <Navigate to='/' />;
  } else {
    return <Navigate to='/login' />;
  }
}
