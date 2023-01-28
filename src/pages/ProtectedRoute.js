import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context';

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  if (!user) {
    return navigate('/')
  };

  return children;
};
export default PrivateRoute;
