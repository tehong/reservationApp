import React, { PureComponent } from "react";
import RootNavigation from "./navigation/RootNavigation";
import { BackendProvider } from "./api/Backend";
import ReservationProvider from "./providers/ReservationProvider";
import { View } from "react-native";

interface Props {}
export default class ReservationApp extends PureComponent<Props> {
  render() {
    return (
      <ReservationProvider>
        <BackendProvider>
          <RootNavigation />
        </BackendProvider>
      </ReservationProvider>
    );
  }
}
