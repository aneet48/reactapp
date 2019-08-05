import React from "react";
import {
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Home from "./src/Home";
import Search from "./src/Search";
import Saved from "./src/Saved";
import Liked from "./src/Liked";
import IconPage from "./src/icon";
import TabIcon from "./src/TabIcon";

const HomeStack = createStackNavigator({
  Home: Home,
  Details: Home
});

const SearchStack = createStackNavigator({
  Search: Search,
  Details: Home
});

const SavedStack = createStackNavigator({
  Saved: Saved,
  Details: Home
});

const LikedStack = createStackNavigator({
  Liked: Liked,
  Details: Home
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: SearchStack,
    Add: IconPage,
    Saved: SavedStack,
    Liked: LikedStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let size = 22;
        let icon = "home";
        let color = tintColor;

        if (routeName == "Search") {
          icon = "search";
        }
        if (routeName == "Add") {
          icon = "plus";
        }
        if (routeName == "Saved") {
          icon = "bookmark";
        }
        if (routeName == "Liked") {
          icon = "heart";
          color = focused ? "#f994eb" : color;
        }

        return (
          <TabIcon name={icon} size={size} color={color} focused={focused} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "#59daac",
      inactiveTintColor: "#8f8f8f",
      keyboardHidesTabBar: true
      // showLabel: false
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: TabNavigator
  },
  {
    drawerBackgroundColor: " rgba(255, 255, 255, .15)",
    contentOptions: {
      inactiveTintColor: "red",
      activeTintColor: "#fff",
      activeBackgroundColor: "gray"
    }
  }
);

export default createAppContainer(DrawerNavigator);
