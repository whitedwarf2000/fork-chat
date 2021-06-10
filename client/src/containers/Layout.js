import React from 'react';
import { Switch, Route } from 'react-router-dom';

import dynamic from 'utils/dynamic';

const Home = dynamic(() => import('containers/Home'));
const ChatRoom = dynamic(() => import('containers/ChatRoom'));
const NotFound = dynamic(() => import('containers/NotFound'));

const Layout = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/room/:id" component={ChatRoom} />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Layout;
