import React from 'react';
import {HeaderBackButton} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const BackButton = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  return (
    <HeaderBackButton
      label={t('header.backButton')}
      onPress={() => navigation.goBack()}
    />
  );
};

export {BackButton};
