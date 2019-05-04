import React, { PureComponent } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import Backend, { ReservationData } from "../api/Backend";
import { TextInputComponent } from "../components/TextInputComponent";
import { ReservationConsumer } from "../providers/ReservationProvider";

interface Props {
  navigation: any;
  name: string;
}

interface State {
  reservationData: any;
}
class AddReservationScreen extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      reservationData: Backend.getReservationDataField(this.props.name)
    };
  }
  private onPress = () => {
    Backend.addReservations(this.state.reservationData)
      .then(data => {
        alert("Your reservation is added successfully!");
        this.props.navigation.goBack();
      })
      .catch(error => {
        alert(`reservation error = ${JSON.stringify(error)}`);
      });
  };

  private onChangeText = (name: string, value: string) => {
    // make a copy and make the change
    var reservationData = JSON.parse(
      JSON.stringify(this.state.reservationData)
    );
    reservationData[name] = value;
    this.setState({ reservationData });
  };

  private renderFields = () => {
    const reservationData: ReservationData = this.state.reservationData;
    let fieldNames = Object.keys(reservationData);
    return fieldNames.map((field, index) => {
      let value = "";
      if (field === "name") {
        return (
          <Text key={field} style={styles.prompt}>
            {`Hi ${this.props.name}, please enter your reservation`}:
          </Text>
        );
      }
      return (
        <View key={field} style={styles.inputContainer}>
          <Text style={styles.fieldName}>{field}:</Text>
          <TextInputComponent
            style={styles.textInput}
            value={this.state.reservationData[field]}
            name={field}
            onChangeText={this.onChangeText}
          />
        </View>
      );
    });
  };

  render() {
    const inputFields = this.renderFields();
    return (
      <View style={styles.container}>
        {inputFields}
        <Button title="Add Reservation" onPress={this.onPress} />
      </View>
    );
  }
}

const ConnectedAddReservation = (props: any) => (
  <ReservationConsumer>
    {//@ts-ignore
    ({ name }) => <AddReservationScreen {...props} name={name} />}
  </ReservationConsumer>
);
export default ConnectedAddReservation;

const styles = StyleSheet.create({
  container: {
    height: 500,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  fieldName: {
    width: 200,
    fontWeight: "bold",
    alignSelf: "flex-start"
  },
  prompt: {
    margin: 15,
    fontSize: 14,
    fontWeight: "bold"
  },
  textInput: {
    width: 300,
    height: 30,
    borderWidth: 1,
    borderColor: "grey"
  }
});
