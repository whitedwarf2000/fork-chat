import styled from 'styled-components';
import { Tooltip as ForkTooltip } from '@fork-ui/core';

import { BaseFlex } from 'components/BaseStyles';

export const DirectWrapper = styled.div``;

export const AllMessageBox = styled.div`
  width: 100%;
  height: 100%;
`;

export const MessageBoxWrapper = styled.div`
  position: absolute;
  bottom: 23px;
`;

export const Message = styled.div`
  max-width: 80%;
  width: fit-content;
  min-height: 45px;
  margin-bottom: 1em;
  padding: 1em 1.2em;
  color: var(--dark);
  border-radius: var(--border-radius-large);
  background-color: ${props => (props.ownMessage ? '#D0D3E3' : 'var(--bg-color)')}; // temp color
  margin-left: ${props => props.ownMessage && 'auto'};
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
