import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@fork-ui/core';
import Textbox from 'components/Textbox';

import api from 'api';

import { setLocalStorage } from 'utils/authority';
import { USER_INFO_KEY } from 'constants.js';
import { FormWrapper, ForgotPassword, Signup } from './loginStyles';

const EMAIL_VALIDATE_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const [serverError, setServerError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const onSubmit = async data => {
    setServerError('');
    setIsLoading(true);

    try {
      const { data: userInfo } = await api.post('/auth/login', { ...data });
      if (userInfo) {
        setLocalStorage(USER_INFO_KEY, JSON.stringify(userInfo));
        setUser(userInfo);
      }
    } catch (error) {
      if (error?.data) {
        setServerError(error.data);
      }
    }

    setIsLoading(false);
    reset({ ...getValues(), password: '' });
  };

  useEffect(() => {
    if (user) {
      reset(); // reset form value
      window.location.href = '/'; // Go to home page when login successfully
    }
  }, [user]);

  return (
    <FormWrapper>
      {serverError.length > 0 && <div>{serverError}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Textbox
              {...field}
              autoFocus
              autoComplete="off"
              size="large"
              type="text"
              label="Enter email"
              errorMessage={errors?.email?.message}
            />
          )}
          rules={{
            required: 'Required',
            pattern: {
              value: EMAIL_VALIDATE_PATTERN,
              message: 'Invalid email',
            },
          }}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Textbox
              {...field}
              autoComplete="off"
              style={{ marginBottom: '1em' }}
              size="large"
              type="password"
              label="Enter password"
              errorMessage={errors?.password?.message}
            />
          )}
          rules={{
            required: 'Required',
            minLength: {
              value: 8,
              message: 'Password must more than 8 character',
            },
          }}
        />
        <ForgotPassword>Forgot password?</ForgotPassword>
        <Button
          loading={isLoading}
          type="submit"
          style={{ width: '100%', borderRadius: 'var(--border-radius-medium)', margin: '20px 0' }}
          color="primary">
          LOGIN
        </Button>
        <Signup>
          Do not have an account?{' '}
          <span style={{ fontStyle: 'italic', cursor: 'pointer' }}>Signup</span>
        </Signup>
      </form>
    </FormWrapper>
  );
};

export default LoginForm;
