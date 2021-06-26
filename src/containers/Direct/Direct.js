import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ChatBoxLayout from 'components/ChatBoxLayout';

import MessageBox from './MessageBox';
import AllMessage from './AllMessages';

import { DirectWrapper } from './directStyles';

const Direct = ({ currentChat, user }) => {
  const [quoteMess, setQuoteMess] = useState('');

  const getQuoteMessage = quoteMessage => {
    if (quoteMessage.text.length > 0) {
      setQuoteMess(quoteMessage.text);
    }
  };

  const clearQuote = () => {
    setQuoteMess('');
  };

  useEffect(() => {
    clearQuote();
  }, [currentChat]);

  return (
    <DirectWrapper>
      <ChatBoxLayout title="Group Chat">
        <AllMessage user={user} currentChat={currentChat} getQuoteMessage={getQuoteMessage} />
        <MessageBox
          user={user}
          currentChat={currentChat}
          quoteMess={quoteMess}
          clearQuote={clearQuote}
        />
      </ChatBoxLayout>
    </DirectWrapper>
  );
};

Direct.propTypes = {
  currentChat: PropTypes.object,
  user: PropTypes.object,
};

export default Direct;
