import React from 'react';
import { Avatar, Badge } from '@fork-ui/core';

import Alarm from '@fork-ui/icons/Alarm';
import BrandGithub from '@fork-ui/icons/BrandGithub';
import ChartBar from '@fork-ui/icons/ChartBar';
import ClipboardCheck from '@fork-ui/icons/ClipboardCheck';
import Video from '@fork-ui/icons/Video';
import Users from '@fork-ui/icons/Users';

import useAuth from 'hooks/useAuth';
import useCollapseControl from 'containers/LeftControl/useCollapseControl';

import { LeftControlWrapper, User, Control, ControlName, ControlLogo } from './leftControlStyles';
import { LEFT_CONTROL_DATA_ID } from 'constants.js';

const LeftControl = () => {
  const { userInfo } = useAuth();
  const { expanded, expand } = useCollapseControl();

  return (
    <LeftControlWrapper data-id={LEFT_CONTROL_DATA_ID}>
      <ControlLogo>
        <BrandGithub onClick={expand} size="35px" color="var(--color-300)" />
      </ControlLogo>
      <div>
        <Control>
          <Alarm size="20px" color="var(--color-300)" />
          <ControlName expanded={expanded}>History</ControlName>
        </Control>
        <Control>
          <ClipboardCheck size="20px" color="var(--color-300)" />
          <ControlName expanded={expanded}>Your Work</ControlName>
        </Control>
        <Control style={{ backgroundColor: '#a0ffc487' }}>
          <ChartBar size="20px" color="#01ff8a" />
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
        <Badge.Dot color="#0df316" overlap placement="bottom-end" style={{ fontSize: '0.675em' }}>
          <Avatar src={userInfo?.profilePicture} />
        </Badge.Dot>
      </User>
    </LeftControlWrapper>
  );
};

export default LeftControl;
