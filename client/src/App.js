import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from 'containers/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
