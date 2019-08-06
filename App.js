import React from "react";
import { Dimensions } from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Home from "./src/Home";
import Search from "./src/Search";
import Single from "./src/Single";
import CatAll from "./src/cat-all";
import AutAll from "./src/aut-all";
import Saved from "./src/Saved";
import Liked from "./src/Liked";
import SideMenu from "./src/SideMenu";
import IconPage from "./src/icon";
import AddNew from "./src/add-new";
import TabIcon from "./src/TabIcon";
let { width } = Dimensions.get("window");

const HomeStack = createStackNavigator({
  Home: Home,
  CatAll: CatAll,
  AutAll: AutAll,
  Posts: Saved,
  Single: Single
});

const SearchStack = createStackNavigator({
  Search: Search,
  Single: Single
});

const SavedStack = createStackNavigator({
  Saved: Saved,
  Single: Single
});

const LikedStack = createStackNavigator({
  Liked: Liked,
  Single: Single
});

const AddNewStack = createStackNavigator({
  Add: AddNew,
  Single: Single
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: SearchStack,
    Add: AddNewStack,
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
    },
    resetOnBlur: true
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: TabNavigator
  },
  {
    drawerWidth: width,
    contentComponent: SideMenu
  }
  // {
  //   drawerBackgroundColor: " rgba(255, 255, 255, .15)",
  //   contentOptions: {
  //     inactiveTintColor: "red",
  //     activeTintColor: "#fff",
  //     activeBackgroundColor: "gray"
  //   }
  // }
);

export default createAppContainer(DrawerNavigator);
