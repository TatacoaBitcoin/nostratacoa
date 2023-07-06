import {useEffect} from 'react';

export const useHistory = address => {
  const loadTransactions = () => {
    // TODO: fetch transaction history
  };

  useEffect(() => {
    if (address) {
      loadTransactions(address);
    }
  }, [address]);

  return {
    isLoading: null,
    history: null ?? [],
    loadTransactions,
    error: null,
  };
};
