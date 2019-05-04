import React, { PureComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList
} from "react-native";
import Backend from "../api/Backend";
import { ReservationConsumer } from "../providers/ReservationProvider";

interface Props {
  name: string;
}
interface State {
  reservations: any;
  isLoading: any;
}
class ListReservationScreen extends PureComponent<Props, State> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      reservations: [],
      isLoading: true
    };
  }

  keyExtractor = (item: any, index: number) => {
    return item.id;
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
    Backend.listReservations(this.props.name)
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
        <Text style={{ fontWeight: "bold" }}>
          Hi {this.props.name}!, here are your reservations:
        </Text>
        {content}
      </View>
    );
  }
}

// Connect props from ReservationConsumer
// Before component initialization
const ConnectedListReservation = (props: any) => (
  <ReservationConsumer>
    {//@ts-ignore
    ({ name }) => <ListReservationScreen {...props} name={name} />}
  </ReservationConsumer>
);

export default ConnectedListReservation;

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
