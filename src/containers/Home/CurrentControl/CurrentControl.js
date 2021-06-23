import React from 'react';

import ChevronLeft from '@fork-ui/icons/ChevronLeft';
import { IconWrapper } from 'components/BaseStyles';

import { SelectedControl, ControlContent, Divider } from './currentControlStyles';

const CurrentControl = () => {
  return (
    <>
      <SelectedControl>
        <IconWrapper>
          <ChevronLeft size="20px" />
        </IconWrapper>
        <ControlContent>Chat</ControlContent>
      </SelectedControl>
      <Divider />
    </>
  );
};

export default CurrentControl;
