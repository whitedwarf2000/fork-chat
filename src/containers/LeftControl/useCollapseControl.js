import { useEffect, useState } from 'react';

import { CONTROL_WIDTH_COLLAPSED } from 'constants.js';

const useCollapseControl = (queryNodeId, expandWidth) => {
  const node = document.querySelector(`[data-id=${queryNodeId}]`);

  const [isExpanded, setIsExpanded] = useState(false);

  const expandControl = () => {
    node.style.width = `${expandWidth}px` || '180px';
  };

  const collapseControl = () => {
    node.style.width = CONTROL_WIDTH_COLLAPSED;
  };

  useEffect(() => {
    if (!node) {
      return;
    }

    if (!isExpanded) {
      collapseControl();
    } else {
      expandControl();
    }
  }, [node, isExpanded]);

  const handleExpand = () => {
    setIsExpanded(prevValue => !prevValue);
  };

  return {
    expanded: isExpanded,
    expand: handleExpand,
  };
};

export default useCollapseControl;
