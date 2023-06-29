import React, {useState} from 'react';
import {
  Text,
  Button,
  TextInput,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';

import {ScreenTemplate} from '../atoms';
import {isWordValid} from '../utils';

const RecoverWallet = ({navigation}) => {
  const [words, setWords] = useState(Array(12).fill(''));
  const [wordStatus, setWordStatus] = useState(Array(12).fill(''));

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

  return (
    <ScreenTemplate>
      <ScrollView>
        <Text>Enter your 12-word phrase</Text>
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
        <Button title="Next" />
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
