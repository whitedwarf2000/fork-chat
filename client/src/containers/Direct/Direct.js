import React from 'react';
import PropTypes from 'prop-types';

import MessageBox from './MessageBox';
import AllMessage from './AllMessages';

const Direct = ({ currentChat, userId }) => {
  return (
    <div>
      <AllMessage userId={userId} currentChat={currentChat} />
      <MessageBox userId={userId} currentChat={currentChat} />
    </div>
  );
};

Direct.propTypes = {
  currentChat: PropTypes.object,
  userId: PropTypes.string,
};

export default Direct;
