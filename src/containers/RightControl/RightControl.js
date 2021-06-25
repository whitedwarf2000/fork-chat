import React from 'react';

import ChevronLeft from '@fork-ui/icons/ChevronLeft';
import ChevronRight from '@fork-ui/icons/ChevronRight';

import useCollapseControl from 'containers/LeftControl/useCollapseControl';

import GroupInfo from './GroupInfo';

import { Divider, IconWrapper } from 'components/BaseStyles';
import { RightControlWrapper, ControlContent, SelectedControl } from './rightControlStyles';

import { RIGHT_CONTROL_DATA_ID } from 'constants.js';

const RightControl = () => {
  const { expanded, expand } = useCollapseControl(RIGHT_CONTROL_DATA_ID, 300);

  return (
    <RightControlWrapper data-id={RIGHT_CONTROL_DATA_ID}>
      <div>
        <SelectedControl>
          {expanded ? (
            <IconWrapper onClick={expand}>
              <ChevronRight size="20px" />
            </IconWrapper>
          ) : (
            <IconWrapper onClick={expand}>
              <ChevronLeft size="20px" />
            </IconWrapper>
          )}
          {expanded && <ControlContent>Shared Files</ControlContent>}
        </SelectedControl>
        <Divider />
      </div>
      <GroupInfo expanded={expanded} />
    </RightControlWrapper>
  );
};

export default RightControl;
