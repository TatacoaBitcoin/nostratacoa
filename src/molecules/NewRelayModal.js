import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';

import {Modal} from '../atoms/Modal';

const NewRelayModal = ({isVisible, setVisible}) => {
  const {t} = useTranslation();
  // const [errorMessage, setErrorMessage] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    // setErrorMessage('');
  }, [url]);

  return (
    <View>
      <Modal isVisible={isVisible} setVisible={setVisible}>
        <View style={styles.sectionContainer}>
          <Text style={styles.title}>{t('newrelaymodal.title')}</Text>
          <Text style={styles.description}>{t('newrelaymodal.text')}</Text>
        </View>
        <View style={styles.sectionContainer}>
          <TextInput
            style={styles.textInput}
            placeholder={t('newrelaymodal.url')}
            value={url}
            onChangeText={setUrl}
            autoFocus
            placeholderTextColor={'lightgrey'}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Button
            title={t('newrelaymodal.create')}
            onPress={() => setVisible(false)}
          />
          <Button
            title={t('newrelaymodal.cancel')}
            onPress={() => setVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

export {NewRelayModal};

const styles = StyleSheet.create({
  sectionContainer: {
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
    color: 'black',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#474E68',
  },
  textInput: {
    color: 'black',
  },
});
