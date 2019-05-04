import React, { PureComponent } from "react";
import RootNavigation from "./navigation/RootNavigation";
import Backend, { BackendProvider } from "./api/Backend";
import ReservationProvider from "./providers/ReservationProvider";
// import { View } from "react-native";

// init the backend
Backend.initialize();

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
