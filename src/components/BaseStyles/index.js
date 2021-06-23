import styled from 'styled-components';

export const IconWrapper = styled.div`
  border-radius: var(--border-radius-large);
  background-color: ${props => props.backgroundColor || '#f0f1f3'}; // temp color
  width: ${props => props.width || '40px'};
  height: ${props => props.height || '40px'};
  display: flex;
  align-items: center;
  justify-content: center;
`;
