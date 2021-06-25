import styled from 'styled-components';
import { Tooltip as ForkTooltip } from '@fork-ui/core';

import { BaseFlex } from 'components/BaseStyles';

export const DirectWrapper = styled.div`
  width: 100%;
`;

export const AllMessageBoxWrapper = styled.div`
  min-height: 75vh; // Default height for no message layout
  max-height: 75vh;
  padding: 1em 1.2em;
  overflow: hidden auto;
`;

export const AllMessageBox = styled.div`
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
`;

export const MessageBoxWrapper = styled.div`
  padding: 1em;
  background-color: #edeff4; // temp color
`;

export const Mess = styled(BaseFlex)`
  align-self: ${props => (props.ownMessage ? 'flex-end' : 'flex-start')};
  max-width: 80%;
`;
export const Message = styled.div`
  min-height: 45px;
  margin-bottom: 1em;
  padding: 1em 1.2em;
  color: var(--dark);
  border-radius: var(--border-radius-large);
  background-color: ${props => (props.ownMessage ? '#D0D3E3' : 'var(--bg-color)')}; // temp color
`;

export const Tooltip = styled(ForkTooltip)`
  background-color: transparent;
  color: var(--dark);
`;

export const MessageControlWrapper = styled(BaseFlex)``;

export const MessageControlItem = styled.div`
  margin: 0 0.275em;
  cursor: pointer;
`;
