import styled from 'styled-components';

export const BaseFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled(BaseFlex)`
  border-radius: var(--border-radius-large);
  background-color: ${props => props.backgroundColor || '#f0f1f3'}; // temp color
  width: ${props => props.width || '40px'};
  height: ${props => props.height || '40px'};
  justify-content: center;
`;

export const H3 = styled.h3`
  font-size: 18px;
  color: var(--dark);
  font-weight: 500;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #dee1e6;
`;
