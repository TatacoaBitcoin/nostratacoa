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

const RecoverWallet = ({navigation}) => {
  const [word, setWord] = useState();

  return (
    <ScreenTemplate>
      <ScrollView>
        <Text>Enter your 12-word phrase</Text>
        {[...Array(12)].map((item, idx) => (
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{idx + 1}.</Text>
            <TextInput
              style={styles.input}
              onChangeText={setWord}
              value={word}
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
    gap: 20,
  },
  input: {
    borderBottomWidth: 1,
    width: '50%',
  },
  inputLabel: {
    width: 20,
  },
});
