import React, {createContext, useContext} from 'react';

import {useAccount} from '../hooks/useAccount';

export const AccountContext = createContext();

export const useAccountState = () => useContext(AccountContext);

export const AccountProvider = ({children}) => {
  const {account, loadAccount, resetAccount} = useAccount();

  const state = {
    account,
    balance: '100',
    isBalanceLoading: false,
    history: [],
    isHistoryLoading: false,
    loadAccount,
    resetAccount,
  };

  return (
    <AccountContext.Provider value={state}>{children}</AccountContext.Provider>
  );
};
