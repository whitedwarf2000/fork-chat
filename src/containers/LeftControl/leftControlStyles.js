import styled from 'styled-components';

import { BaseFlex } from 'components/BaseStyles';
import { LEFT_CONTROL_WIDTH } from 'constants.js';

export const LeftControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${LEFT_CONTROL_WIDTH};
  padding: 1em;
  text-align: center;
  justify-content: space-between;
  transition: width 0.2s ease-in-out;
`;

export const User = styled(BaseFlex)`
  justify-content: center;
`;

export const Control = styled(BaseFlex)`
  height: 40px;
  min-width: 50px;
  margin: 0.3em 0;
  padding: 0 0.8em;
  border-radius: var(--border-radius-medium);
`;

export const ControlName = styled.div`
  display: ${props => (props.expanded ? 'inline-block' : 'none')};
  margin-left: 10px;
  cursor: pointer;
`;

export const ControlLogo = styled.div`
  cursor: pointer;
`;
