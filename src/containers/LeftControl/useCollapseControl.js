import { useEffect, useState } from 'react';

import { LEFT_CONTROL_DATA_ID, LEFT_CONTROL_WIDTH } from 'constants.js';

const useCollapseControl = () => {
  const leftControlNode = document.querySelector(`[data-id=${LEFT_CONTROL_DATA_ID}]`);

  const [isExpanded, setIsExpanded] = useState(false);

  const expandControl = () => {
    leftControlNode.style.width = '180px';
  };

  const collapseControl = () => {
    leftControlNode.style.width = LEFT_CONTROL_WIDTH;
  };

  useEffect(() => {
    if (!leftControlNode) {
      return;
    }

    if (!isExpanded) {
      collapseControl();
    } else {
      expandControl();
    }
  }, [leftControlNode, isExpanded]);

  const handleExpand = () => {
    setIsExpanded(prevValue => !prevValue);
  };

  return {
    expanded: isExpanded,
    expand: handleExpand,
  };
};

export default useCollapseControl;
