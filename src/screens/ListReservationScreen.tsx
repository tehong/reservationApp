import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {}
class ListReservationScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>ListReservation</Text>
      </View>
    );
  }
}
export default ListReservationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
