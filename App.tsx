/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { PureComponent } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import RootNavigation from "./src/navigation/RootNavigation";
import Backend, { BackendProvider } from "./src/api/Backend";

interface Props {}
export default class App extends PureComponent<Props> {
  addReservation = () => {};
  listReservation = () => {};
  render() {
    return (
      <BackendProvider>
        <RootNavigation />
      </BackendProvider>
    );
  }
}
