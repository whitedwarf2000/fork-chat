import React from 'react';
import PropTypes from 'prop-types';

import MessageBox from './MessageBox';
import AllMessage from './AllMessages';

const Direct = ({ currentChat, user }) => {
  return (
    <div>
      <AllMessage user={user} currentChat={currentChat} />
      <MessageBox user={user} currentChat={currentChat} />
    </div>
  );
};

Direct.propTypes = {
  currentChat: PropTypes.object,
  user: PropTypes.object,
};

export default Direct;
