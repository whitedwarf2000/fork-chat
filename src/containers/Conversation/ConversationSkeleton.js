import React from 'react';
import styled from 'styled-components';

import { Skeleton } from '@fork-ui/core';

const SkeletonWrapper = styled.div`
  display: flex;
`;

const ConversationSkeleton = () => {
  return (
    <SkeletonWrapper>
      <Skeleton shape="circle" size="1.2em" />
      <div style={{ width: '200px', margin: '0 15px' }}>
        <Skeleton shape="p" w="70%" />
        <Skeleton shape="p" w="20%" />
      </div>
    </SkeletonWrapper>
  );
};

export default ConversationSkeleton;
