import styled from 'styled-components';

import { H3 } from 'components/BaseStyles';

export const SelectedControl = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

export const ControlContent = styled(H3)`
  margin: 0 1em;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: var(--color-200);
`;
