import React from 'react';
import {Text} from 'react-native';

import {ScreenTemplate} from '../atoms';
import {useAccountState} from '../context/account.provider';

const Home = () => {
  const {balance} = useAccountState();

  console.log(balance);

  return (
    <ScreenTemplate>
      <Text>Home</Text>
    </ScreenTemplate>
  );
};

export {Home};
