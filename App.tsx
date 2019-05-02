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

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

interface Props {}
export default class App extends PureComponent<Props> {
  addReservation = () => {};
  listReservation = () => {};
  render() {
    return <RootNavigation />;
  }
}
