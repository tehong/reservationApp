import React, { PureComponent } from "react";
import { Platform } from "react-native";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider, graphql } from "react-apollo";
import gql from "graphql-tag";
import { string } from "prop-types";

const BACKEND_URL =
  "https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev";

// see https://blog.brainsandbeards.com/part-2-setting-up-apollo-client-in-a-react-native-app-e766c7e872e2
const client = new ApolloClient({
  link: new HttpLink({
    uri: BACKEND_URL
  }),
  cache: new InMemoryCache()
});

interface Props {}
export class BackendProvider extends PureComponent<Props> {
  render() {
    return (
      <ApolloProvider client={client}>{this.props.children}</ApolloProvider>
    );
  }
}

export interface ReservationData {
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
}

export default class Backend {
  /**
   * Initializes Backend
   */
  static initialize() {}
  static listReservations(name: string) {
    const query = gql`query {
        reservations(where: { name: "${name}" }) {
          id
          name
          hotelName
          arrivalDate
          departureDate
        }
      }`;
    return graphqlQuery(query);
  }
  static addReservations(reservationData: ReservationData) {
    const uuidv3 = require("uuid/v3");
    const id = uuidv3(BACKEND_URL, uuidv3.URL);
    const name = reservationData.name;
    const hotelName = reservationData.hotelName;
    const arrivalDate = reservationData.arrivalDate;
    const departureDate = reservationData.departureDate;
    const query = gql`mutation {
        createReservation({
            id: ${id}
            name: ${name}
            hotelName: ${hotelName}
            arrivalDate: ${arrivalDate}
            departureDate: ${departureDate}
        }) { 
          id
          name
          hotelName
          arrivalDate
          departureDate
        }
      }`;
    return graphqlQuery(query);
  }
}

const graphqlQuery = (query: any) => {
  return new Promise((resolve, reject) => {
    client
      .query({
        query: query
      })
      .then(result => {
        resolve(result.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
