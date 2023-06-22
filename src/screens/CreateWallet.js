import React from 'react';
import {Text, Button, ScrollView} from 'react-native';

import {ScreenTemplate} from '../atoms';
import {WordList} from '../molecules';
import {useRecoveryWords} from '../hooks/useRecoveryWords';

const CreateWallet = ({navigation}) => {
  const {randomWords, generateWords, generateSeed} = useRecoveryWords();

  return (
    <ScreenTemplate>
      <Text>Write down your 12-word phrase in the correct order</Text>
      <ScrollView>
        <WordList list={randomWords} />
        <Button title="Regenerate" onPress={generateWords} />
        <Button
          title="Next"
          onPress={() => console.log('navigate to next screen')}
        />
      </ScrollView>
    </ScreenTemplate>
  );
};

export {CreateWallet};
