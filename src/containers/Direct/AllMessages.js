import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Loader, Avatar } from '@fork-ui/core';
import Dots from '@fork-ui/icons/Dots';
import ArrowBackUp from '@fork-ui/icons/ArrowBackUp';
import MoodSmile from '@fork-ui/icons/MoodSmile';
import MessageDots from '@fork-ui/icons/MessageDots';

import api from 'api';

import { ReplyMessageWrapper } from 'components/BaseStyles';

import {
  AllMessageBoxWrapper,
  AllMessageBox,
  Message,
  Tooltip,
  MessageControlWrapper,
  MessageControlItem,
  Mess,
  ReplyMessage,
} from './directStyles';

const AllMessage = ({ currentChat, user, getQuoteMessage, messages }) => {
  const { _id: userId } = user;

  const [isFetchingMess, setIsFetchingMess] = useState(false);
  const [mess, setMess] = useState([]);

  const messBoxRef = useRef(null);
  const allMessageRef = useRef(null);

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

  const renderAllMessages = mess => {
    return mess.map((m, index) => {
      let isShowAvatar = true;
      const own = userId === m.senderId;
      if (mess[index - 1]) {
        // check next message still belong to current user
        isShowAvatar = mess[index - 1]?.senderId !== mess[index]?.senderId;
      }
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
              <MessageControlItem onClick={() => getQuoteMessage(m)}>
                <ArrowBackUp />
              </MessageControlItem>
              <MessageControlItem>
                <MoodSmile />
              </MessageControlItem>
            </MessageControlWrapper>
          }>
          <Mess ownMessage={own}>
            {!own && isShowAvatar && (
              <div style={{ marginRight: '10px' }}>
                <Avatar size={40}>B</Avatar>
              </div>
            )}
            {/* render dummy avatar spacing if next message still belong to current member */}
            {!own && !isShowAvatar && (
              <div style={{ marginRight: '10px' }}>
                <div style={{ width: '40px' }} />
              </div>
            )}
            <Message ownMessage={own}>
              {m?.reply && m.reply.text && (
                <ReplyMessageWrapper>
                  <div>
                    <MessageDots size="15px" />
                  </div>
                  <ReplyMessage>{m.reply.text}</ReplyMessage>
                </ReplyMessageWrapper>
              )}
              <div>{m.text}</div>
            </Message>
          </Mess>
        </Tooltip>
      );
    });
  };

  useEffect(() => {
    setTimeout(() => {
      if (!messBoxRef.current || !allMessageRef.current) {
        return;
      }
      const allMessageBoxHeight = allMessageRef.current?.offsetHeight;
      if (allMessageBoxHeight) {
        messBoxRef.current.scrollTo({
          top: allMessageBoxHeight,
          behavior: 'smooth',
        });
      }
    }, 300);
  }, [currentChat, messages, messBoxRef.current, allMessageRef.current]);

  useEffect(() => {
    if (currentChat?._id) {
      fetchMessageOfConversation(currentChat._id);
    }
  }, [currentChat]);

  useEffect(() => {
    setMess(prevMess => [...prevMess, ...messages]);
  }, [messages]);

  return (
    <AllMessageBoxWrapper ref={messBoxRef}>
      <AllMessageBox ref={allMessageRef}>
        {isFetchingMess ? (
          <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
            <Loader.NiceSpinner />
          </div>
        ) : (
          mess.length > 0 && renderAllMessages(mess)
        )}
      </AllMessageBox>
    </AllMessageBoxWrapper>
  );
};

AllMessage.propTypes = {
  currentChat: PropTypes.object,
  user: PropTypes.object,
  getQuoteMessage: PropTypes.func,
  messages: PropTypes.array,
};

export default AllMessage;
