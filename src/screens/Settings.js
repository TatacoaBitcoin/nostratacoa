import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {ScreenTemplate, SettingsNavItem} from '../atoms';
import {RELAYS_SETTINGS_SCREEN_NAME} from '../config/navigation/SettingsFlow';

const Settings = () => {
  const {t} = useTranslation();

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <SettingsNavItem
          to={RELAYS_SETTINGS_SCREEN_NAME}
          label={t('settings.relays')}
          rightText={<Text style={{color: 'red'}}>Sin conexión</Text>}/>
      </View>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
});

export {Settings};
