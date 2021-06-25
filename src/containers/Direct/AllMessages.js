import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Loader, Avatar } from '@fork-ui/core';
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
  Mess,
} from './directStyles';

const AllMessage = ({ currentChat, user }) => {
  const { _id: userId } = user;
  const { messages, typing } = useChat(currentChat._id);

  const [isFetchingMess, setIsFetchingMess] = useState(false);
  const [mess, setMess] = useState([]);

  const fetchMessageOfConversation = async conversationId => {
    setIsFetchingMess(true);

    try {
      const { data: messages } = await api.get(`/messages/${conversationId}`);
      if (messages) {
        setMess(messages);
      }
    } catch (error) {
      return error;
    }

    setIsFetchingMess(false);
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
      {isFetchingMess ? (
        <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <Loader.NiceSpinner />
        </div>
      ) : (
        mess.length > 0 &&
        mess.map((m, index) => {
          const own = userId === m.senderId;
          return (
            <Tooltip
              arrow={false}
              placement={own ? 'left' : 'right'}
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
              <Mess ownMessage={own}>
                {!own && (
                  <div style={{ marginRight: '10px' }}>
                    <Avatar size={40} src={m?.profilePicture}>
                      B
                    </Avatar>
                  </div>
                )}
                <Message ownMessage={own}>{m.text}</Message>
              </Mess>
            </Tooltip>
          );
        })
      )}
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
