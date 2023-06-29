import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RelayItem = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textName}>bitcoiner.social</Text>
        <Text style={styles.textStatus}>sin conexión</Text>
      </View>
      <View style={styles.actionsContainer}>
        <Text style={styles.actionText}>conectar</Text>
        <Icon name="dots-vertical" color={'black'} size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textName: {
    color: 'black',
    fontSize: 20,
  },
  textStatus: {
    color: 'grey',
    fontSize: 14,
    paddingBottom: 6,
  },
  actionsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  actionText: {
    color: 'green',
    marginRight: 10,
  }
});

export {RelayItem};
