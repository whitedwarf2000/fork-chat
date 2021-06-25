import React from 'react';

import Folder from '@fork-ui/icons/Folder';
import Link from '@fork-ui/icons/Link';

import { File, Links, FileAndLinkWrapper } from './groupStyles';
import { BaseFlex, H3 } from 'components/BaseStyles';

const FileAndLink = () => {
  return (
    <FileAndLinkWrapper>
      <File>
        <div>All files</div>
        <BaseFlex style={{ justifyContent: 'center' }}>
          <Folder size="30px" />
          {/* temp color */}
          <H3 style={{ color: '#15594e', margin: '0 0.25em' }}>184</H3>
        </BaseFlex>
      </File>
      <Links>
        <div>All links</div>
        <BaseFlex style={{ justifyContent: 'center' }}>
          <Link size="30px" />
          {/* temp color */}
          <H3 style={{ color: '#15594e', margin: '0 0.25em' }}>299</H3>
        </BaseFlex>
      </Links>
    </FileAndLinkWrapper>
  );
};

export default FileAndLink;
