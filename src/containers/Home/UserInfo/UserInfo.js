import React from 'react';
import { Avatar, Badge, Button } from '@fork-ui/core';

import Settings from '@fork-ui/icons/Settings';
import ChevronDown from '@fork-ui/icons/ChevronDown';

import useAuth from 'hooks/useAuth';

import { UserInfoWrapper, UserName } from './userInfoStyles';

const UserInfo = () => {
  const { userInfo } = useAuth();

  return (
    <UserInfoWrapper>
      <div style={{ textAlign: 'center' }}>
        <Badge.Dot color="#10C2A5" overlap placement="bottom-end" style={{ fontSize: '0.675em' }}>
          <Avatar size={100} src={userInfo?.profilePicture} />
        </Badge.Dot>
        <UserName>{userInfo?.username}</UserName>
        {/* temp color */}
        <Button
          style={{
            backgroundColor: '#BFE8E1',
            color: '#1F8070',
            borderRadius: 'var(--border-radius-medium)',
          }}>
          <span>available</span>
          <ChevronDown />
        </Button>
      </div>
      <Settings size="12px" />
    </UserInfoWrapper>
  );
};

export default UserInfo;
