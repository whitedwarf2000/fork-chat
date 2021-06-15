import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import useAuth from 'hooks/useAuth';
import LoginForm from './LoginForm';

import { LoginWrapper, Logo } from './loginStyles';

import logo from '../../assets/images/fork_logo.jpg';

const Login = () => {
  const { isLoggedIn } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn]);

  return (
    <LoginWrapper>
      <Logo>
        <img alt="main-logo" src={logo} />
      </Logo>
      <LoginForm />
    </LoginWrapper>
  );
};

export default Login;
