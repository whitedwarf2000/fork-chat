import React from 'react';
import { Switch } from 'react-router-dom';

import dynamic from 'utils/dynamic';

import RouteWrapper from 'containers/RouterWrapper';

import AuthorizeLayout from './AuthorizeLayout';

const Login = dynamic(() => import('containers/Login'));
const Home = dynamic(() => import('containers/Home'));
const NotFound = dynamic(() => import('containers/NotFound'));

const Layout = () => {
  return (
    <Switch>
      <RouteWrapper exact isPrivate path="/" component={Home} />
      <RouteWrapper path="/login" component={Login} layout={AuthorizeLayout} />
      <RouteWrapper path="*">
        <NotFound />
      </RouteWrapper>
    </Switch>
  );
};

export default Layout;
