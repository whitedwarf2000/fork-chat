import styled from 'styled-components';

import { BaseFlex } from 'components/BaseStyles';
import { COMMON_HEADER_HEIGHT } from 'constants.js';

export const Friend = styled(BaseFlex)`
  min-height: ${COMMON_HEADER_HEIGHT};
  padding: 0 1em;
  transition: all 0.2s;
  cursor: pointer;
  border-radius: var(--border-radius-medium);

  :hover {
    background-color: #f7f8fa; // temp color
  }
`;

export const ConversationWrapper = styled.div`
  height: 300px;
  overflow-y: scroll;
  padding-bottom: 3em;
`;
