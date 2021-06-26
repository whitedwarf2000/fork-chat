import styled from 'styled-components';

import { H3, BaseFlex } from 'components/BaseStyles';

export const ChatBoxLayoutWrapper = styled.div`
  width: 100%;
`;

export const ChatBoxHeader = styled(BaseFlex)`
  height: 65px;
  background-color: #edeff4; // temp color
  padding: 1em;
  justify-content: space-between;
  border-top-left-radius: var(--border-radius-large);
  border-top-right-radius: var(--border-radius-large);
  border-bottom: 1px solid #dee1e6; // temp color
`;

export const ChatBoxTitle = styled(H3)``;
export const ChatBoxMenu = styled.div``;
export const ChatBoxContent = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #edeff4; // temp color
  min-height: 90vh;
  max-height: 90vh; // 90vh instead of 100vh to ignore 75px of chat box header
`;
