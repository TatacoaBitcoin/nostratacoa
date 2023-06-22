import React, {useState} from 'react';
import {Text, Button, ScrollView} from 'react-native';

import {ScreenTemplate} from '../atoms';
import {WordList, PwdModal} from '../molecules';
import {useRecoveryWords} from '../hooks/useRecoveryWords';
import {useLoading} from '../hooks/useLoading';

const CreateWallet = ({navigation}) => {
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const {isLoading, withLoading} = useLoading();

  const {randomWords, generateWords, generateSeed} = useRecoveryWords();

  const onContinue = () => {
    setPasswordModalOpen(true);
  };

  const onCreateWallet = password => {
    console.log('wallet created!', password);
  };

  return (
    <ScreenTemplate>
      <PwdModal
        isVisible={isPasswordModalOpen}
        isWalletLoading={isLoading}
        setVisible={setPasswordModalOpen}
        onContinue={onCreateWallet}
      />
      <Text>Write down your 12-word phrase in the correct order</Text>
      <ScrollView>
        <WordList list={randomWords} />
        <Button title="Regenerate" onPress={generateWords} />
        <Button title="Continue" onPress={onContinue} />
      </ScrollView>
    </ScreenTemplate>
  );
};

export {CreateWallet};
