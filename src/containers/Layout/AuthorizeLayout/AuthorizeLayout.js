import React from 'react';
import PropTypes from 'prop-types';

import { AuthWrapper, RightContent } from './authorizeLayoutStyles';

const AuthorizeLayout = ({ children }) => {
  return (
    <AuthWrapper>
      <div className="left">{children}</div>
      <RightContent />
    </AuthWrapper>
  );
};

AuthorizeLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default AuthorizeLayout;
