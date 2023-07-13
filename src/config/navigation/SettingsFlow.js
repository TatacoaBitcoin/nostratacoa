import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';

import {Settings, RelaySettings} from './../../screens';

const RELAYS_SETTINGS_SCREEN_NAME = 'relaysSettings';

const SETTINGS_SCREENS = [RELAYS_SETTINGS_SCREEN_NAME];

const SettingsStack = createNativeStackNavigator();

const SettingsFlow = () => {
  const {t} = useTranslation();

  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: true,
        animation: 'slide_from_right',
      }}>
      <SettingsStack.Screen
        name="Home"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
      <SettingsStack.Screen
        name={RELAYS_SETTINGS_SCREEN_NAME}
        component={RelaySettings}
        options={{title: t('settings.relays')}}
      />
    </SettingsStack.Navigator>
  );
};

export {SettingsFlow, SETTINGS_SCREENS, RELAYS_SETTINGS_SCREEN_NAME};
