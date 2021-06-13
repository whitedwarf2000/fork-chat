import React from 'react';
import { Switch, Route } from 'react-router-dom';

import dynamic from 'utils/dynamic';

const Home = dynamic(() => import('containers/Home'));
const NotFound = dynamic(() => import('containers/NotFound'));

const Layout = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Layout;
