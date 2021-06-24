import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Loader } from '@fork-ui/core';
import Dots from '@fork-ui/icons/Dots';
import ArrowBackUp from '@fork-ui/icons/ArrowBackUp';
import MoodSmile from '@fork-ui/icons/MoodSmile';

import api from 'api';
import useChat from 'hooks/useChat';

import { BaseFlex } from 'components/BaseStyles';

import {
  AllMessageBox,
  Message,
  Tooltip,
  MessageControlWrapper,
  MessageControlItem,
} from './directStyles';

const AllMessage = ({ currentChat, user }) => {
  const { _id: userId } = user;
  const { messages, typing } = useChat(currentChat._id);
  const [mess, setMess] = useState([]);

  const fetchMessageOfConversation = async conversationId => {
    try {
      const { data: messages } = await api.get(`/messages/${conversationId}`);
      if (messages) {
        setMess(messages);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (currentChat?._id) {
      fetchMessageOfConversation(currentChat._id);
    }
  }, [currentChat]);

  useEffect(() => {
    setMess(prevMess => [...prevMess, ...messages]);
  }, [messages]);

  return (
    <AllMessageBox>
      {mess.length > 0 &&
        mess.map((m, index) => (
          <Tooltip
            arrow={false}
            placement="left"
            key={m._id || index}
            title={
              <MessageControlWrapper>
                <MessageControlItem>
                  <Dots />
                </MessageControlItem>
                <MessageControlItem>
                  <ArrowBackUp />
                </MessageControlItem>
                <MessageControlItem>
                  <MoodSmile />
                </MessageControlItem>
              </MessageControlWrapper>
            }>
            <Message ownMessage={userId === m.senderId}>{m.text}</Message>
          </Tooltip>
        ))}
      {typing && typing?._id !== userId && (
        <BaseFlex>
          <Loader.Dots size="0.5em" />
          <div style={{ marginLeft: '5px' }}>{typing?.username} is typing</div>
        </BaseFlex>
      )}
    </AllMessageBox>
  );
};

AllMessage.propTypes = {
  currentChat: PropTypes.object,
  user: PropTypes.object,
};

export default AllMessage;
