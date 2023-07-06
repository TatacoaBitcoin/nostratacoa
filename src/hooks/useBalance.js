import {useState, useEffect} from 'react';

import {useLoading} from './useLoading';

export const useBalance = address => {
  const [balance, setBalance] = useState(null);
  const {isLoading, withLoading} = useLoading();

  const getBalance = () =>
    withLoading(async () => {
      if (!address) {
        return null;
      }
      // TODO: get Balance
      return '100';
    });

  useEffect(() => {
    if (!address) {
      setBalance(null);
    } else {
      getBalance().then(setBalance);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return {balance, isLoading};
};
