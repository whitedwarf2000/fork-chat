import styled from 'styled-components';
import { BaseFlex, H3 } from 'components/BaseStyles';

export const GroupName = styled(H3)`
  margin: 0.5em 0;
  white-space: nowrap;
`;
export const InfoGroup = styled(BaseFlex)`
  flex-direction: column;
  margin: 1.5em 0;
`;

export const FileAndLinkWrapper = styled(BaseFlex)`
  justify-content: space-between;
`;

const BaseSquare = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 130px;
  height: 70px;
  border-radius: var(--border-radius-medium);
  background-color: #f7f8fa; // temp color
`;
export const File = styled(BaseSquare)`
  background-color: #e0f4f1; // temp color
  color: #15594e;
`;
export const Links = styled(BaseSquare)``;

export const FileTypeWrapper = styled(BaseFlex)`
  justify-content: space-between;
  margin: 1em 0;
`;

const BaseFileSquare = styled(BaseSquare)`
  width: 50px;
  height: 50px;
  align-items: center;
`;
export const FilesWrapper = styled(BaseFlex)`
  margin: 1em 0;
  justify-content: space-between;
`;
export const FileInfoWrapper = styled.div`
  margin: 0 1em;
  text-align: left;
  white-space: nowrap;
`;
export const FileSquare = styled(BaseFileSquare)`
  background-color: ${props => props.bgColor};
`;
export const FileName = styled.div`
  color: var(--dark);
  font-weight: 500;
`;
