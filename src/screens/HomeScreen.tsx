import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { ROUTES } from "../navigation/RootNavigation";

interface Props {}
class HomeScreen extends PureComponent<Props> {
  private addReservation = () => {
    this.props.navigation.navigate(ROUTES.RootAddReservation);
  };
  private listReservation = () => {
    this.props.navigation.navigate(ROUTES.RootListReservation);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to my reservation system!</Text>
        <Button title={"List Reservation"} onPress={this.listReservation} />
        <Button title={"Add Reservation"} onPress={this.addReservation} />
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
