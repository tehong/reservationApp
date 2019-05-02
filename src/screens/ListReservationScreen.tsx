import React, { PureComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList
} from "react-native";
import Backend from "../api/Backend";

interface Props {}
class ListReservationScreen extends PureComponent {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      reservations: [],
      isLoading: true
    };
  }

  keyExtractor = (item, index) => {
    return item + index;
  };
  renderItem = ({ item, index }) => {
    var name = item.name;
    var arrivalDate = item.arrivalDate;
    var departureDate = item.departureDate;
    var hotelName = item.hotelName;
    return (
      <Text style={styles.item}>
        {`name: ${name}\nhotelName: ${hotelName}\narrival: ${arrivalDate}\ndeparture: ${departureDate}`}
      </Text>
    );
  };

  componentDidMount() {
    Backend.listReservations("Giraldo")
      .then(data => {
        var reservations = data.reservations;
        this.setState({ reservations, isLoading: false });
      })
      .catch(error => {
        this.setState({ reservations: [], isLoading: false });
      });
  }
  render() {
    var content = <ActivityIndicator />;
    var { reservations, isLoading } = this.state;
    if (!isLoading) {
      if (reservations.length > 0) {
        content = (
          <FlatList
            keyExtractor={this.keyExtractor}
            data={reservations}
            renderItem={this.renderItem}
            showsVerticalScrollIndicator={true}
          />
        );
      } else {
        content = <Text>No reservation found!</Text>;
      }
    }

    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold" }}>Your reservations:</Text>
        {content}
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
  },
  text: {
    margin: 10
  },
  item: {
    margin: 10,
    borderWidth: 1,
    borderColor: "pink"
  }
});
