import React from 'react';

import Pacman from '@fork-ui/icons/Pacman';

const NoConversation = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Pacman size="40px" />
      <div>You have no conversation yet.</div>
    </div>
  );
};

export default NoConversation;
