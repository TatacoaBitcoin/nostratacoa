import {useState} from 'react';

export const useAccount = () => {
  const [account, setAccount] = useState(null);

  const loadAccount = privateKey => {
    if (privateKey) {
      // convert private key to address
      setAccount('address');
    }
  };

  const resetAccount = () => setAccount(null);

  return {account, loadAccount, resetAccount};
};
