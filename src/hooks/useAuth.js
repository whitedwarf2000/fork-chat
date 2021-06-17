// Mock authorize hook
import { useMemo } from 'react';
import { getLocalStorage } from 'utils/authority';

import { USER_INFO_KEY } from 'constants.js';

const useAuth = () => {
  const userInfo = JSON.parse(getLocalStorage(USER_INFO_KEY)) || null;
  const isLoggedIn = useMemo(() => userInfo || false, [userInfo]);

  return {
    isLoggedIn,
    userInfo,
  };
};

export default useAuth;
