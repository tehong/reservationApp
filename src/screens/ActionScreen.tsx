import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {ROUTES} from '../navigation/RootNavigation';

const ActionScreen = (props: any) => {
  const addReservation = () => {
    props.navigation.navigate(ROUTES.RootAddReservation);
  };
  const listReservation = () => {
    props.navigation.navigate(ROUTES.RootListReservation);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Please select an action below:</Text>
      <Button title={'List Reservation'} onPress={listReservation} />
      <Button title={'Add Reservation'} onPress={addReservation} />
    </View>
  );
};

export default ActionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
