import styled from 'styled-components';

import wfh from '../../../assets/images/work_from_home.png';

export const AuthWrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  padding: 3em 12em;

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const RightContent = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${wfh});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
