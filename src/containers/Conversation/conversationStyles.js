import styled from 'styled-components';

export const Friend = styled.div`
  display: flex;
  align-items: center;
  min-height: 35px;
  padding: 0 1em;
  transition: all 0.2s;
  cursor: pointer;

  :hover {
    background-color: var(--color-200);
    color: var(--color-400);
  }
`;

export const ConversationWrapper = styled.div``;
