import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingsNavItem = ({label, to, rightText}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.pressableContainer}
      onPress={() => navigation.navigate(to)}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.rightContainer}>
        <View style={styles.rightText}>{rightText}</View>
        <Icon name="chevron-right" color={'black'} size={24} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressableContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 18,
    color: 'black',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  rightText: {
    marginRight: 10,
  },
});

export {SettingsNavItem};
