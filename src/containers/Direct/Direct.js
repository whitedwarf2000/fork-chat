import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ChatBoxLayout from 'components/ChatBoxLayout';

import MessageBox from './MessageBox';
import AllMessage from './AllMessages';

import { DirectWrapper } from './directStyles';
import useChat from 'hooks/useChat';

const Direct = ({ currentChat, user }) => {
  const [quoteMess, setQuoteMess] = useState('');
  const { messages, sendMessage, handleTyping } = useChat(currentChat._id);

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
        <AllMessage
          user={user}
          currentChat={currentChat}
          getQuoteMessage={getQuoteMessage}
          messages={messages}
        />
        <MessageBox
          user={user}
          currentChat={currentChat}
          quoteMess={quoteMess}
          clearQuote={clearQuote}
          sendMessage={sendMessage}
          handleTyping={handleTyping}
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
