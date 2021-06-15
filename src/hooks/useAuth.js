// Mock authorize hook
import { useMemo } from 'react';
import { getLocalStorage } from 'utils/authority';

import { USER_INFO_KEY } from 'constants.js';

const useAuth = () => {
  const isLoggedIn = useMemo(() => JSON.parse(getLocalStorage(USER_INFO_KEY)) || false, []);

  return {
    isLoggedIn,
  };
};

export default useAuth;
