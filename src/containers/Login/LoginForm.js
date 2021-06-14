import React from 'react';
import { Button } from 'fork-ui/core';

import Textbox from 'components/Textbox';

import { FormWrapper, ForgotPassword, Signup } from './loginStyles';

const LoginForm = () => {
  return (
    <FormWrapper>
      <Textbox size="large" type="text" label="Enter email" />
      <Textbox
        style={{ marginBottom: '1em' }}
        size="large"
        type="password"
        label="Enter password"
      />
      <ForgotPassword>Forgot password?</ForgotPassword>
      <Button style={{ width: '100%', borderRadius: '8px', margin: '20px 0' }} color="primary">
        LOGIN
      </Button>
      <Signup>
        Do not have an account? <span style={{ fontStyle: 'italic' }}>Signup</span>
      </Signup>
    </FormWrapper>
  );
};

export default LoginForm;
