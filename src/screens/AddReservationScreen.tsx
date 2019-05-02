import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {}
class AddReservationScreen extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>AddReservation</Text>
      </View>
    );
  }
}
export default AddReservationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
