import React from 'react';

import {RelayItem, ScreenTemplate} from '../atoms';
import {useNostrState} from '../context/nostr.provider';

const RelaySettings = () => {
  const {relays} = useNostrState();

  return (
    <ScreenTemplate>
      {relays.map(relay => (
        <RelayItem key={relay.url} url={relay.url} />
      ))}
    </ScreenTemplate>
  );
};

export {RelaySettings};
