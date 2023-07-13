import React, {useState} from 'react';

import {Button} from 'react-native';
import {useTranslation} from 'react-i18next';

import {RelayItem, ScreenTemplate} from '../atoms';
import {NewRelayModal} from '../molecules';
import {useNostrState} from '../context/nostr.provider';

const RelaySettings = () => {
  const {t} = useTranslation();
  const {relays} = useNostrState();
  const [isNewRelayModalOpen, setIsNewRelayModalOpen] = useState(false);

  return (
    <ScreenTemplate>
      <NewRelayModal
        isVisible={isNewRelayModalOpen}
        setVisible={setIsNewRelayModalOpen}
      />
      {relays.map(relay => (
        <RelayItem key={relay.url} url={relay.url} />
      ))}
      <Button
        title={t('relaysettings.add')}
        onPress={() => setIsNewRelayModalOpen(true)}
      />
    </ScreenTemplate>
  );
};

export {RelaySettings};
