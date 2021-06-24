import React from 'react';

import ChevronLeft from '@fork-ui/icons/ChevronLeft';
import { IconWrapper, Divider } from 'components/BaseStyles';

import { SelectedControl, ControlContent } from './currentControlStyles';

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
