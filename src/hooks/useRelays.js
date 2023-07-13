const DEFAULT_RELAYS = [
  {url: 'wss://bitcoiner.social'},
  {url: 'wss://nostr-pub.wellorder.net'},
  {url: 'wss://nostr.developer.li'},
  {url: 'wss://nostr.oxtr.dev'},
  {url: 'wss://nostr.swiss-enigma.ch'},
  {url: 'wss://relay.nostr.snblago.com'},
];

export const useRelays = () => {
  const relays = DEFAULT_RELAYS;

  return {relays};
};
