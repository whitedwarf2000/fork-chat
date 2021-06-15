import React from 'react';
import PropTypes from 'prop-types';

import { AuthWrapper, RightContent, LeftContent } from './authorizeLayoutStyles';

const AuthorizeLayout = ({ children }) => {
  return (
    <AuthWrapper>
      <LeftContent>{children}</LeftContent>
      <RightContent />
    </AuthWrapper>
  );
};

AuthorizeLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default AuthorizeLayout;
