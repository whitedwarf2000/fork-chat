import styled from 'styled-components';

import { LeftControlWrapper } from '../LeftControl/leftControlStyles';
import { BaseFlex, H3 } from 'components/BaseStyles';

export const RightControlWrapper = styled(LeftControlWrapper)`
  justify-content: flex-start;
  max-height: 100vh;
`;

export const SelectedControl = styled(BaseFlex)`
  margin-bottom: 1em;
  cursor: pointer;
`;

export const ControlContent = styled(H3)`
  margin: 0 1em;
  white-space: nowrap;
`;
