import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Backend from '../api/Backend';
import {ReservationConsumer} from '../providers/ReservationProvider';

interface Props {
  name: string;
}
interface State {
  reservations: any;
  isLoading: any;
}
const ListReservationScreen = (props: any) => {
  const [state, setState] = useState({
    reservations: [],
    isLoading: true,
  });

  const keyExtractor = (item: any) => {
    return item.id;
  };
  const renderItem = (item: any) => {
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

  useEffect(() => {
    Backend.listReservations(props.name)
      .then((data: {reservations: any}) => {
        setState({reservations: data.reservations, isLoading: false});
      })
      .catch(() => {
        setState({reservations: [], isLoading: false});
      });
  });
  var content = <ActivityIndicator />;
  let {reservations, isLoading} = state;
  if (!isLoading) {
    if (reservations.length > 0) {
      content = (
        <FlatList
          keyExtractor={keyExtractor}
          data={reservations}
          renderItem={renderItem}
          showsVerticalScrollIndicator={true}
        />
      );
    } else {
      content = <Text>No reservation found!</Text>;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hi {props.name}!, here are your reservations:
      </Text>
      {content}
    </View>
  );
};

// Connect props from ReservationConsumer
// Before component initialization
const ConnectedListReservation = (props: any) => (
  <ReservationConsumer>
    {
      //@ts-ignore
      ({name}) => <ListReservationScreen {...props} name={name} />
    }
  </ReservationConsumer>
);

export default ConnectedListReservation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
  item: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'pink',
  },
});
