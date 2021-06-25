import React from 'react';

import Plus from '@fork-ui/icons/Plus';
import DotsVertical from '@fork-ui/icons/DotsVertical';

import { IconWrapper } from 'components/BaseStyles';
import { LastChatWrapper, AddNewConversation } from './lastChatStyles';

const LastChat = () => {
  return (
    <LastChatWrapper>
      {/* temp color */}
      <div style={{ fontWeight: '500', color: '#6F7884' }}>Last chat</div>
      <AddNewConversation>
        {/* temp color */}
        <IconWrapper
          style={{ borderRadius: 'var(--border-radius-medium)' }}
          width="25px"
          height="25px"
          backgroundColor="#E8F5F3">
          <Plus size="20px" color="#00A389" />
        </IconWrapper>
        <div style={{ marginLeft: '0.8em' }}>
          <DotsVertical size="20px" color="#BEC4CD" />
        </div>
      </AddNewConversation>
    </LastChatWrapper>
  );
};

export default LastChat;
