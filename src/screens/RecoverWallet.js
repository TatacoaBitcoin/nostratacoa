import React, {useState} from 'react';
import {
  Text,
  Button,
  TextInput,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import {useTranslation} from 'react-i18next';

import {ScreenTemplate} from '../atoms';
import {isWordValid} from '../utils';
import {PwdModal} from '../molecules';
import {useLoading} from '../hooks/useLoading';
import {useRecoveryWords} from '../hooks/useRecoveryWords';
import {generatePrivateKey} from '../libs/hdkey';

const RECOVERY_WORD_COUNT = 12;

const RecoverWallet = ({navigation}) => {
  const {t} = useTranslation();
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const {isLoading, withLoading} = useLoading();
  const [words, setWords] = useState(Array(RECOVERY_WORD_COUNT).fill(''));
  const [wordStatus, setWordStatus] = useState(
    Array(RECOVERY_WORD_COUNT).fill(''),
  );
  const {generateSeed} = useRecoveryWords();

  const handleInputChange = (value, index) => {
    const isValid = isWordValid(value);
    const updateValidWords = [...wordStatus];
    if (value.length >= 3 && isValid) {
      updateValidWords[index] = 'success';
    } else if (value.length >= 3 && !isValid) {
      updateValidWords[index] = 'danger';
    } else if (value.length < 3) {
      updateValidWords[index] = '';
    }
    setWordStatus(updateValidWords);
    const updatedWords = [...words];
    updatedWords[index] = value;
    setWords(updatedWords);
  };

  const onRestoreWallet = password =>
    withLoading(async () => {
      try {
        const seed = await generateSeed(password);

        if (seed !== undefined) {
          const key = await generatePrivateKey(seed);

          // loadWallet(key);
          setPasswordModalOpen(false);
        }
      } catch (error) {
        console.log('onRestoreWallet#error', error.message);
      }
    });

  const onContinue = () => {
    setPasswordModalOpen(true);
  };

  const wordsAreComplete = () => {
    return words.filter(item => item !== '').length < RECOVERY_WORD_COUNT;
  };

  return (
    <ScreenTemplate>
      <PwdModal
        isVisible={isPasswordModalOpen}
        isWalletLoading={isLoading}
        setVisible={setPasswordModalOpen}
        onContinue={onRestoreWallet}
      />
      <ScrollView>
        <Text>{t('recovery.text')}</Text>
        {words.map((word, idx) => (
          <View style={styles.inputContainer} key={idx}>
            <Text
              style={[
                styles.inputLabel,
                wordStatus[idx] === 'success' && styles.success,
                wordStatus[idx] === 'danger' && styles.danger,
              ]}>
              {idx + 1}.
            </Text>
            <TextInput
              style={[
                styles.input,
                wordStatus[idx] === 'success' && styles.success,
                wordStatus[idx] === 'danger' && styles.danger,
              ]}
              onChangeText={value => handleInputChange(value, idx)}
              value={word}
              autoCapitalize={'none'}
            />
          </View>
        ))}
        <Button
          title={t('recovery.button')}
          onPress={onContinue}
          disabled={wordsAreComplete()}
        />
      </ScrollView>
    </ScreenTemplate>
  );
};

export {RecoverWallet};

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputLabel: {
    width: 20,
  },
  input: {
    borderBottomWidth: 1,
    width: '50%',
    paddingBottom: 5,
  },
  success: {
    color: 'green',
  },
  danger: {
    color: 'red',
  },
});
