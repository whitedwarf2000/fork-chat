// Mock authorize hook
import { useMemo } from 'react';
import { getLocalStorage } from 'utils/authority';

const useAuth = () => {
  const isLoggedIn = useMemo(() => JSON.parse(getLocalStorage('user_info')) || false, []);

  return {
    isLoggedIn,
  };
};

export default useAuth;
