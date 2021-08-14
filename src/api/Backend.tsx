import React, {PureComponent} from 'react';
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import gql from 'graphql-tag';
import 'react-native-get-random-values';
import {v1 as uuidv1} from 'uuid';

const BACKEND_URL =
  'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev';

// see https://blog.brainsandbeards.com/part-2-setting-up-apollo-client-in-a-react-native-app-e766c7e872e2
let client: any;
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
  static initialize() {
    client = new ApolloClient({
      link: new HttpLink({
        uri: BACKEND_URL,
      }),
      cache: new InMemoryCache(),
    });
  }
  static getReservationDataField(name = '') {
    var reservationData: ReservationData = {
      name: name,
      hotelName: '',
      arrivalDate: '',
      departureDate: '',
    };
    return reservationData;
  }
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
    // const uuid = require('uuid');
    const id = uuidv1().substring(0, 15);
    const name = reservationData.name;
    const hotelName = reservationData.hotelName;
    const arrivalDate = reservationData.arrivalDate;
    const departureDate = reservationData.departureDate;
    const mutation = gql`mutation {
        createReservation(
          data: {
            id: "${id}"
            name: "${name}"
            hotelName: "${hotelName}"
            arrivalDate: "${arrivalDate}"
            departureDate: "${departureDate}"
          }
        ) {
          id
          name
          hotelName
          arrivalDate
          departureDate
        }
      }`;
    const refetchQuery = gql`query {
        reservations(where: { name: "${name}" }) {
          id
          name
          hotelName
          arrivalDate
          departureDate
        }
      }`;
    return graphqlMutation(mutation, refetchQuery);
  }
}

const graphqlQuery = (query: any) => {
  return new Promise((resolve, reject) => {
    client
      .query({
        query: query,
      })
      .then((result: {data: unknown}) => {
        resolve(result.data);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

const graphqlMutation = (mutation: any, refetchQuery: any = gql``) => {
  return new Promise((resolve, reject) => {
    client
      .mutate({
        mutation: mutation,
        refetchQueries: [
          {
            query: refetchQuery,
            variables: {repoFullName: 'apollographql/apollo-client'},
          },
        ],
      })
      .then((result: {data: unknown}) => {
        resolve(result.data);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};
