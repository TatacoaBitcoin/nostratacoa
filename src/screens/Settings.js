import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ScreenTemplate} from '../atoms';

const Settings = ({ navigation }) => {
  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <Pressable
          style={styles.pressableContainer}
          onPress={() => {
            navigation.navigate("Relays Settings")
          }}>
            <Text style={styles.text}>Relays</Text>
            <Icon name="chevron-right" color={'black'} size={24} />
        </Pressable>
      </View>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  pressableContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    color: 'black',
  }
});

export {Settings};
