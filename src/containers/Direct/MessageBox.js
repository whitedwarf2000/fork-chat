import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '@fork-ui/core';
import Send from '@fork-ui/icons/Send';
import MoodSmile from '@fork-ui/icons/MoodSmile';
import Paperclip from '@fork-ui/icons/Paperclip';
import X from '@fork-ui/icons/X';

import api from 'api';

import TextArea from 'components/TextArea';

import { MessageBoxWrapper, QuoteWrapper } from './directStyles';

const MessageBox = ({ currentChat, user, quoteMess, clearQuote, sendMessage, handleTyping }) => {
  const { _id: userId } = user;
  const chatBoxRef = useRef(null);
  const [currentMess, setCurrentMess] = useState('');

  const handleChangeMessage = event => {
    setCurrentMess(event.target.value);
  };

  const putMessageToAPI = async payload => {
    try {
      await api.post('messages', {
        ...payload,
      });
    } catch (error) {
      return error;
    }
  };

  const handleSendMessage = () => {
    if (currentMess.length === 0) {
      return;
    }
    const reply = {
      senderId: userId,
      text: quoteMess,
    };
    const payload = {
      conversationId: currentChat._id,
      senderId: userId,
      text: currentMess,
      reply,
    };

    const receiverId = currentChat.members.find(member => member !== userId);
    sendMessage(currentMess, reply, userId, receiverId);
    setCurrentMess('');
    handleTyping('', user);
    clearQuote();

    putMessageToAPI(payload);
  };

  const onEnterPress = e => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <MessageBoxWrapper>
      <TextArea
        size="medium"
        onKeyDown={onEnterPress}
        ref={chatBoxRef}
        value={currentMess}
        onChange={handleChangeMessage}
        placeholder="Write message..."
        quote={
          quoteMess.length > 0 && (
            <QuoteWrapper>
              <div>{quoteMess}</div>
              <div style={{ cursor: 'pointer' }} onClick={clearQuote}>
                <X />
              </div>
            </QuoteWrapper>
          )
        }
        controls={
          <>
            <Button
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                borderRadius: 'var(--border-radius-medium)',
                minWidth: '40px',
              }}
              icon={<MoodSmile size="20px" />}
            />
            <Button
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                borderRadius: 'var(--border-radius-medium)',
                minWidth: '40px',
                margin: '0 1em',
              }}
              icon={<Paperclip size="20px" />}
            />
            <Button
              onClick={handleSendMessage}
              style={{
                backgroundColor: '#00A389',
                color: 'var(--bg-color)',
                borderRadius: 'var(--border-radius-medium)',
                minWidth: '40px',
              }}
              icon={<Send size="20px" />}
            />
          </>
        }
      />
    </MessageBoxWrapper>
  );
};

MessageBox.propTypes = {
  currentChat: PropTypes.object,
  user: PropTypes.object,
  quoteMess: PropTypes.string,
  clearQuote: PropTypes.func,
  sendMessage: PropTypes.func,
  handleTyping: PropTypes.func,
};

export default MessageBox;
