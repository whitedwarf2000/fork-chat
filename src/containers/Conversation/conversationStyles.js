import styled from 'styled-components';

export const Friend = styled.div`
  display: flex;
  align-items: center;
  min-height: 70px;
  padding: 0 1em;
  transition: all 0.2s;
  cursor: pointer;
  border-radius: var(--border-radius-medium);

  :hover {
    background-color: #f7f8fa; // temp color
  }
`;

export const ConversationWrapper = styled.div``;
