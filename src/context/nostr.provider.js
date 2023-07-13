import React, {createContext, useContext} from 'react';

import {useRelays} from '../hooks/useRelays';

export const NostrContext = createContext();

export const useNostrState = () => useContext(NostrContext);

export const NostrProvider = ({children}) => {
  const {relays} = useRelays();

  const state = {relays};

  return (
    <NostrContext.Provider value={state}>{children}</NostrContext.Provider>
  );
};
