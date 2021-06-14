import React from 'react';

import LoginForm from './LoginForm';

import { LoginWrapper, Logo } from './loginStyles';

import logo from '../../assets/images/logo.png';

const Login = () => {
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
