import styled from 'styled-components';

import { H3 } from 'components/BaseStyles';
import { COMMON_HEADER_HEIGHT } from 'constants.js';

export const ChatBoxLayoutWrapper = styled.div`
  min-width: 60%;
`;

export const ChatBoxHeader = styled.div`
  height: ${COMMON_HEADER_HEIGHT};
  background-color: #edeff4; // temp color
  backdrop-filter: saturate(180%) blur(5px);
  padding: 1em;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: var(--border-radius-large);
  border-top-right-radius: var(--border-radius-large);
`;

export const ChatBoxTitle = styled(H3)``;
export const ChatBoxMenu = styled.div``;
