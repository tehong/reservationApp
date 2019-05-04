import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import ActionScreen from "../screens/ActionScreen";
import ListReservationScreen from "../screens/ListReservationScreen";
import AddReservationScreen from "../screens/AddReservationScreen";

// enum this navigator's routes to avoid mistakes
export const ROUTES = Object.freeze({
  RootHome: "RootHome",
  RootAction: "RootAction",
  RootListReservation: "RootListReservation",
  RootAddReservation: "RootAddReservation"
});

const AppNavigator = createStackNavigator({
  [ROUTES.RootHome]: {
    screen: HomeScreen
  },
  [ROUTES.RootAction]: {
    screen: ActionScreen
  },
  [ROUTES.RootListReservation]: {
    screen: ListReservationScreen
  },
  [ROUTES.RootAddReservation]: {
    screen: AddReservationScreen
  }
});

export default createAppContainer(AppNavigator);
