import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

import {Modal} from '../atoms/Modal';

const PwdModal = ({isVisible, isWalletLoading, setVisible, onContinue}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setErrorMessage('');
  }, [password, confirmPassword]);

  const onCreateWallet = () => {
    if (password !== confirmPassword) {
      setErrorMessage("The entered passwords don't match!");
      return;
    }
    onContinue(password);
  };

  return (
    <View>
      <Modal isVisible={isVisible} setVisible={setVisible}>
        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Set password</Text>
          <Text style={styles.description}>
            Set a strong password allowing you to login easily to your wallet
            from this device. We don't send and store the password anywhere
            except this device.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <TextInput
            placeholder="Type a strong password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoFocus
          />
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Type the password again"
            // errorMessage={errorMessage}
            secureTextEntry
          />
        </View>
        <View style={styles.sectionContainer}>
          {/* <Button onPress={onCreateWallet} isLoading={isWalletLoading}>
            Create wallet
          </Button>
          <Button onPress={() => setVisible(false)}>Cancel</Button> */}
          <Button title="Create wallet" onPress={onCreateWallet} />
          <Button title="Cancel" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export {PwdModal};

const styles = StyleSheet.create({
  sectionContainer: {
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#474E68',
  },
});
