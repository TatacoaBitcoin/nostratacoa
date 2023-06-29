import React from 'react';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import {ScreenTemplate, SettingsNavItem} from '../atoms';
import {RELAYS_SETTINGS_SCREEN_NAME} from '../config/navigation/SettingsFlow';

const Settings = () => {
  const {t} = useTranslation();

  return (
    <ScreenTemplate>
      <SettingsNavItem
        to={RELAYS_SETTINGS_SCREEN_NAME}
        label={t('settings.relays')}
        rightText={<Text style={{color: 'red'}}>Sin conexión</Text>}/>
    </ScreenTemplate>
  );
};

export {Settings};
