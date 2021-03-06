import React from 'react';
import { Avatar, Badge } from '@fork-ui/core';

import History from '@fork-ui/icons/History';
import ToolsKitchen2 from '@fork-ui/icons/ToolsKitchen2';
import ChartBar from '@fork-ui/icons/ChartBar';
import ClipboardCheck from '@fork-ui/icons/ClipboardCheck';
import Video from '@fork-ui/icons/Video';
import Users from '@fork-ui/icons/Users';

import useAuth from 'hooks/useAuth';
import useCollapseControl from './useCollapseControl';

import { LeftControlWrapper, User, Control, ControlName, ControlLogo } from './leftControlStyles';
import { LEFT_CONTROL_DATA_ID } from 'constants.js';

const LeftControl = () => {
  const { userInfo } = useAuth();
  const { expanded, expand } = useCollapseControl(LEFT_CONTROL_DATA_ID, 180);

  return (
    <LeftControlWrapper data-id={LEFT_CONTROL_DATA_ID}>
      <ControlLogo>
        <ToolsKitchen2 onClick={expand} size="35px" color="var(--color-300)" />
      </ControlLogo>
      <div>
        <Control>
          <History size="20px" color="var(--color-300)" />
          <ControlName expanded={expanded}>History</ControlName>
        </Control>
        <Control>
          <ClipboardCheck size="20px" color="var(--color-300)" />
          <ControlName expanded={expanded}>Your Work</ControlName>
        </Control>
        {/* temp color */}
        <Control style={{ backgroundColor: '#E0F4F1' }}>
          {/* temp color */}
          <ChartBar size="20px" color="#00A389" />
          <ControlName expanded={expanded}>Analyst</ControlName>
        </Control>
        <Control>
          <Video size="20px" color="var(--color-300)" />
          <ControlName expanded={expanded}>Video Call</ControlName>
        </Control>
        <Control>
          <Users size="20px" color="var(--color-300)" />
          <ControlName expanded={expanded}>Your Groups</ControlName>
        </Control>
      </div>
      <User>
        {/* temp color */}
        <Badge.Dot color="#10C2A5" overlap placement="bottom-end" style={{ fontSize: '0.675em' }}>
          <Avatar src={userInfo?.profilePicture} />
        </Badge.Dot>
      </User>
    </LeftControlWrapper>
  );
};

export default LeftControl;
