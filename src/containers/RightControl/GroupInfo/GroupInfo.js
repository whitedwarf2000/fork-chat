import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from '@fork-ui/core';
import DotsVertical from '@fork-ui/icons/DotsVertical';

import FileAndLink from './FileAndLink';
import GroupFiles from './GroupFiles';

import { GroupName, InfoGroup, FileTypeWrapper } from './groupStyles';

const GroupInfo = ({ expanded }) => {
  return (
    <div>
      {expanded ? (
        <InfoGroup>
          <div>
            <Avatar
              size={100}
              src="https://image.thanhnien.vn/1080/uploaded/ngocthanh/2016_04_03/doi1_qfln.jpg"
            />
          </div>
          <GroupName>Super Heroes Group</GroupName>
          <div>10 members</div>
        </InfoGroup>
      ) : (
        <div style={{ margin: '1em 0' }}>
          <Avatar
            size={50}
            src="https://image.thanhnien.vn/1080/uploaded/ngocthanh/2016_04_03/doi1_qfln.jpg"
          />
        </div>
      )}
      {expanded && <FileAndLink />}
      {expanded && (
        <FileTypeWrapper>
          {/* temp color */}
          <div style={{ fontWeight: '500', color: '#6F7884' }}>File type</div>
          <DotsVertical size="20px" color="#BEC4CD" />
        </FileTypeWrapper>
      )}
      <GroupFiles expanded={expanded} />
    </div>
  );
};

GroupInfo.propTypes = {
  expanded: PropTypes.bool,
};

export default GroupInfo;
