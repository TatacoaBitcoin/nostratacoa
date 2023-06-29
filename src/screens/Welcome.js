import React from 'react';
import {Text, Button} from 'react-native';
import {useTranslation} from 'react-i18next';

import {ScreenTemplate} from '../atoms';

const Welcome = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <ScreenTemplate>
      <Text>{t('welcome.title')}</Text>
      <Button
        title={t('welcome.create')}
        onPress={() => navigation.navigate('CreateWallet')}
      />
      <Button
        title={t('welcome.recovery')}
        onPress={() => navigation.navigate('RecoverWallet')}
      />
    </ScreenTemplate>
  );
};

export {Welcome};
