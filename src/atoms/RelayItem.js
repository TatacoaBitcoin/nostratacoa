import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RelayItem = () => {
  const [isConnected, setIsConnected] = useState(false);
  const toggleConnected = () => setIsConnected(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textName}>bitcoiner.social</Text>
        {isConnected
          ? <Text style={styles.textSuccessStatus}>Conectado</Text>
          : <Text style={styles.textErrorStatus}>Sin Conexión</Text>
        }
      </View>
      <View style={styles.actionsContainer}>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{false: 'grey', true: 'lightgreen'}}
            thumbColor={isConnected ? 'green' : 'lightgrey'}
            ios_backgroundColor="grey"
            onValueChange={toggleConnected}
            value={isConnected}
          />
        </View>
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
  textSuccessStatus: {
    color: 'green',
    fontSize: 14,
    paddingBottom: 6,
  },
  textErrorStatus: {
    color: 'red',
    fontSize: 14,
    paddingBottom: 6,
  },
  actionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchContainer: {
    marginRight: 10,
  }
});

export {RelayItem};
