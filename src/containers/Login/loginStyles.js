import styled from 'styled-components';
import { BaseFlex } from 'components/BaseStyles';

export const Logo = styled.div`
  width: 300px;
`;

export const LoginWrapper = styled(BaseFlex)`
  width: 500px;
  margin: 0 auto;
  padding: 1em;
  flex-direction: column;
  background-color: var(--white-rgb);
  backdrop-filter: saturate(180%) blur(5px);
`;

export const FormWrapper = styled.div`
  margin: 1em 0;
  width: 80%;
`;

export const ForgotPassword = styled.div`
  text-align: end;
  font-size: 12px;
  font-weight: 500;
  font-style: italic;
  color: var(--color-300);
  cursor: pointer;
`;

export const Signup = styled.div`
  text-align: center;
  font-weight: 500;
  color: var(--color-300);
`;
