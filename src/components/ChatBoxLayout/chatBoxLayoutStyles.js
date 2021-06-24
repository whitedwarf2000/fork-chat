import styled from 'styled-components';

import { H3, BaseFlex } from 'components/BaseStyles';
import { COMMON_HEADER_HEIGHT } from 'constants.js';

export const ChatBoxLayoutWrapper = styled.div`
  min-width: 60%;
`;

export const ChatBoxHeader = styled(BaseFlex)`
  height: ${COMMON_HEADER_HEIGHT};
  background-color: #edeff4; // temp color
  backdrop-filter: saturate(180%) blur(5px);
  padding: 1em;
  justify-content: space-between;
  border-top-left-radius: var(--border-radius-large);
  border-top-right-radius: var(--border-radius-large);
  border-bottom: 1px solid #dee1e6; // temp color
`;

export const ChatBoxTitle = styled(H3)``;
export const ChatBoxMenu = styled.div``;
export const ChatBoxContent = styled.div`
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 1em 1.2em;
  background-color: #edeff4; // temp color
  height: 90vh; // 90vh instead of 100vh to ignore 75px of chat box header
`;
