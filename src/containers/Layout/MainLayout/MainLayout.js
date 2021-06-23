import React from 'react';
import PropTypes from 'prop-types';

import LeftControl from 'containers/LeftControl';
import RightControl from 'containers/RightControl';

import { LayoutWrapper } from './mainLayoutStyles';

const MainLayout = ({ children }) => {
  return (
    <LayoutWrapper>
      <LeftControl />
      {children}
      <RightControl />
    </LayoutWrapper>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MainLayout;
