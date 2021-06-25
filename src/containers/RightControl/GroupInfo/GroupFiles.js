import React from 'react';
import PropTypes from 'prop-types';

import File from '@fork-ui/icons/File';
import Photo from '@fork-ui/icons/Photo';
import Movie from '@fork-ui/icons/Movie';
import Files from '@fork-ui/icons/Files';
import ChevronRight from '@fork-ui/icons/ChevronRight';

import { FileSquare, FilesWrapper, FileName, FileInfoWrapper } from './groupStyles';
import { BaseFlex } from '../../../components/BaseStyles';

// temp color
const files = [
  {
    id: 1,
    icon: <File color="#5a68df" size="20px" />,
    bgColor: '#dfe1f9',
    name: 'Documents',
    total: '344',
    space: '99',
  },
  {
    id: 2,
    icon: <Photo color="#c4b07a" size="20px" />,
    bgColor: '#f4eacf',
    name: 'Photos',
    total: '54',
    space: '23',
  },
  {
    id: 3,
    icon: <Movie color="#50b0ba" size="20px" />,
    bgColor: '#e4f7f9',
    name: 'Movies',
    total: '87',
    space: '67',
  },
  {
    id: 4,
    icon: <Files color="#be6e5f" size="20px" />,
    bgColor: '#ffe0da',
    name: 'Others',
    total: '81',
    space: '88',
  },
];

const GroupFiles = ({ expanded }) => {
  return (
    <div>
      {files.map(f => {
        return (
          <FilesWrapper key={f.id}>
            <BaseFlex>
              <FileSquare bgColor={f.bgColor}>{f.icon}</FileSquare>
              {expanded && (
                <FileInfoWrapper>
                  <FileName>{f.name}</FileName>
                  <span>{f.total || 0} files</span>
                  <span>{', '}</span>
                  <span>{f.space}MB</span>
                </FileInfoWrapper>
              )}
            </BaseFlex>
            {expanded && (
              <div>
                <ChevronRight size="20px" />
              </div>
            )}
          </FilesWrapper>
        );
      })}
    </div>
  );
};

GroupFiles.propTypes = {
  expanded: PropTypes.bool,
};

export default GroupFiles;
