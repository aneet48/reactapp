import React from "react";
import {
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
// import Icon from "react-native-vector-icons/dist/Feather";
// import * as Animatable from "react-native-animatable";

// const AnimatableIcon = Animatable.createAnimatableComponent(Icon);

import Home from "./src/Home";
import IconPage from "./src/icon";
import TabIcon from "./src/TabIcon";
// import Add from "./src/add";

const HomeStack = createStackNavigator({
  Home: Home,
  Details: Home
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: Home,
    Add: IconPage,
    Saved: Home,
    Liked: Home
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let size = 25;
        let icon = "home";
        // if (routeName == "Home") {
        //   // return <TabIcon name="home" size={25} color={tintColor} />;
        //   // return focused ? (
            // <AnimatableIcon
            //   animation={focused ? "bounce" : null}
            //   iterationCount={5}
            //   name="home"
            //   size={25}
            //   color={tintColor}
            // />
        //   // ) : (
        //   //   <Icon name="home" size={25} color={tintColor} />
        //   // );
        // }
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
        }

        return (
          <TabIcon
            name={icon}
            size={size}
            color={tintColor}
            focused={focused}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "pink",
      inactiveTintColor: "gray",
      // showLabel: false
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: TabNavigator
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
