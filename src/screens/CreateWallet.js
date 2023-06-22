import React from 'react';
import {Text} from 'react-native';

import {ScreenTemplate} from '../atoms';
import {useRecoveryWords} from '../hooks/useRecoveryWords';

const CreateWallet = () => {
  const {randomWords, generateWords, generateSeed} = useRecoveryWords();

  console.log(randomWords);

  return (
    <ScreenTemplate>
      <Text>CreateWallet</Text>
    </ScreenTemplate>
  );
};

export {CreateWallet};
