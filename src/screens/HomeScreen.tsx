import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {ROUTES} from '../navigation/RootNavigation';
import {ReservationConsumer} from '../providers/ReservationProvider';

interface State {
  name: string;
}
const HomeScreen = (props: any) => {
  const [state, setState] = useState({
    name: '',
  });
  const onChangeText = (name: string) => {
    // make a copy and make the change
    setState({name});
  };
  const enterName = () => {
    let name = state.name;
    props.updateReservation({name});
    props.navigation.navigate(ROUTES.RootAction);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to hotel reservation system!</Text>
      <Text style={styles.welcome}>Please enter your name:</Text>
      <TextInput
        style={styles.textInput}
        value={state.name}
        onChangeText={onChangeText}
      />
      <Button title={'Enter'} onPress={enterName} />
    </View>
  );
};

// Added to connect ReservationConsumer
// To pass props to AccountUpdate
// Before component initialization
// As the AccountUpdate.state requires
// The new props
const ConnectedReservationUpdate = (props: any) => (
  <ReservationConsumer>
    {({name, updateReservation}) => (
      <HomeScreen
        {...props}
        name={name}
        updateReservation={updateReservation}
      />
    )}
  </ReservationConsumer>
);

export default ConnectedReservationUpdate;

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
  textInput: {
    width: 300,
    height: 30,
    borderWidth: 1,
    borderColor: 'grey',
  },
});
