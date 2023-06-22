import React from 'react';
import {Text, Button} from 'react-native';

import {ScreenTemplate} from '../atoms';

const Welcome = ({navigation}) => {
  return (
    <ScreenTemplate>
      <Text>Welcome</Text>
      <Text>You don't have an account</Text>
      <Button
        title="Create new account"
        onPress={() => navigation.navigate('CreateWallet')}
      />
    </ScreenTemplate>
  );
};

export {Welcome};
