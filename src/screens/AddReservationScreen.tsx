import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import Backend, {ReservationData} from '../api/Backend';
import {TextInputComponent} from '../components/TextInputComponent';
import {ReservationConsumer} from '../providers/ReservationProvider';

interface Props {
  navigation: any;
  name: string;
}

interface State {
  reservationData: any;
}
const AddReservationScreen = (props: any) => {
  const [state, setState] = useState({
    reservationData: Backend.getReservationDataField(props.name),
  });
  const onPress = () => {
    Backend.addReservations(state.reservationData)
      .then(() => {
        Alert.alert('Success', 'Your reservation is added successfully!');
        props.navigation.goBack();
      })
      .catch((error: any) => {
        Alert.alert('Error', `reservation error = ${JSON.stringify(error)}`);
      });
  };

  const onChangeText = (name: string, value: string) => {
    // make a copy and make the change
    var reservationData = JSON.parse(JSON.stringify(state.reservationData));
    reservationData[name] = value;
    setState({reservationData});
  };

  const renderFields = () => {
    const reservationData: ReservationData = state.reservationData;
    let fieldNames = Object.keys(reservationData);
    return fieldNames.map(field => {
      if (field === 'name') {
        return (
          <Text key={field} style={styles.prompt}>
            {`Hi ${props.name}, please enter your reservation`}:
          </Text>
        );
      }
      const reservationDataField =
        state.reservationData[field as keyof ReservationData];
      const textInputProps = {
        style: styles.textInput,
        value: reservationDataField,
        name: field,
        onChangeText: onChangeText,
      };

      return (
        <View key={field} style={styles.inputContainer}>
          <Text style={styles.fieldName}>{field}:</Text>
          <TextInputComponent {...textInputProps} />
        </View>
      );
    });
  };

  const inputFields = renderFields();
  return (
    <View style={styles.container}>
      {inputFields}
      <Button title="Add Reservation" onPress={onPress} />
    </View>
  );
};

const ConnectedAddReservation = (props: any) => (
  <ReservationConsumer>
    {
      //@ts-ignore
      ({name}) => <AddReservationScreen {...props} name={name} />
    }
  </ReservationConsumer>
);
export default ConnectedAddReservation;

const styles = StyleSheet.create({
  container: {
    height: 500,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  fieldName: {
    width: 200,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  prompt: {
    margin: 15,
    fontSize: 14,
    fontWeight: 'bold',
  },
  textInput: {
    width: 300,
    height: 30,
    borderWidth: 1,
    borderColor: 'grey',
  },
});
