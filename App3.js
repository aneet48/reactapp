import {
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Home from "./src/Home";
import Blur from "./src/Blur";
import SideMenu from "./src/SideMenu";

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Settings: Blur
});

const DrawerNavigator = createDrawerNavigator(
  {
    // Home: Blur,
    Home2: TabNavigator
  },

  {
    // contentComponent: Blur,
    // hideStatusBar: true,
    drawerBackgroundColor: " rgba(255, 255, 255, .15)",

    // overlayColor: "white",
    contentOptions: {
      inactiveTintColor: "red",
      activeTintColor: "#fff",
      activeBackgroundColor: "gray"
    }
  }
);

export default createAppContainer(DrawerNavigator);
