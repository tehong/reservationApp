import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {ROUTES} from '../navigation/RootNavigation';
import {ScreenProps} from 'react-navigation';
import {ReservationConsumer} from '../providers/ReservationProvider';

interface Props {
  navigation: ScreenProps;
  updateReservation: any;
}
interface State {
  name: string;
}
class HomeScreen extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
    };
  }
  private onChangeText = (name: string) => {
    // make a copy and make the change
    this.setState({name});
  };
  private enterName = () => {
    var name = this.state.name;
    this.props.updateReservation({name});
    this.props.navigation.navigate(ROUTES.RootAction);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to hotel reservation system!</Text>
        <Text style={styles.welcome}>Please enter your name:</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.value}
          onChangeText={this.onChangeText}
        />
        <Button title={'Enter'} onPress={this.enterName} />
      </View>
    );
  }
}

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
