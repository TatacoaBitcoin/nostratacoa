import React, {createContext, useContext} from 'react';

import {useAccount} from '../hooks/useAccount';
import {useBalance} from '../hooks/useBalance';
import {useHistory} from '../hooks/useHistory';

export const AccountContext = createContext();

export const useAccountState = () => useContext(AccountContext);

export const AccountProvider = ({children}) => {
  const {account, loadAccount, resetAccount} = useAccount();
  const {balance, isLoading: isBalanceLoading} = useBalance(account?.address);
  const {history, isLoading: isHistoryLoading} = useHistory(account?.address);

  const state = {
    account,
    balance,
    isBalanceLoading,
    history,
    isHistoryLoading,
    loadAccount,
    resetAccount,
  };

  return (
    <AccountContext.Provider value={state}>{children}</AccountContext.Provider>
  );
};
