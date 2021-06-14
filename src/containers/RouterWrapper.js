import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import useAuth from 'hooks/useAuth';

import MainLayout from 'containers/Layout/MainLayout';

const RouteWrapper = ({ component: Component, layout, isPrivate, ...rest }) => {
  const { isLoggedIn } = useAuth();
  const Layout = layout || MainLayout;

  return (
    <Route
      {...rest}
      render={props => {
        if (isPrivate) {
          if (!isLoggedIn) {
            const { location } = props;
            return (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: location },
                }}
              />
            );
          }
        }
        return (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

RouteWrapper.propTypes = {
  component: PropTypes.any,
  layout: PropTypes.any,
  isPrivate: PropTypes.bool,
  location: PropTypes.any,
};

export default RouteWrapper;
