import styled from 'styled-components';
import { Tooltip as ForkTooltip } from '@fork-ui/core';

import { BaseFlex } from 'components/BaseStyles';

export const DirectWrapper = styled.div`
  width: 100%;
`;

export const AllMessageBox = styled.div`
  height: 86%;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const MessageBoxWrapper = styled.div`
  position: absolute;
  bottom: 23px;
  width: 100%;
`;

export const Mess = styled(BaseFlex)`
  align-self: ${props => (props.ownMessage ? 'flex-end' : 'flex-start')};
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
