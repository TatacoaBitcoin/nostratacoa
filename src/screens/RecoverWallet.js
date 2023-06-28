import React from 'react';
import {Text, Button} from 'react-native';

import {ScreenTemplate} from '../atoms';

const RecoverWallet = ({navigation}) => {
  return (
    <ScreenTemplate>
      <Text>RecoverWallet</Text>
      <Button title="Next" />
    </ScreenTemplate>
  );
};

export {RecoverWallet};
