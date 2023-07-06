import React, {createContext, useContext} from 'react';

export const AccountContext = createContext();

export const useAccountState = () => useContext(AccountContext);

export const AccountProvider = ({children}) => {
  const state = {
    account: '2Ba',
    balance: '100',
    isBalanceLoading: false,
    history: [],
    isHistoryLoading: false,
    loadWallet: () => {},
    resetAccount: () => {},
  };

  return (
    <AccountContext.Provider value={state}>{children}</AccountContext.Provider>
  );
};
