import React from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import  Ionicons  from "react-native-vector-icons/dist/Ionicons";

const TabIcon = ({ onPress, menuToggled }) => {
  const logoStyles = [styles.logoStyle];
  if (menuToggled !== null) {
    const animation = new Animated.Value(menuToggled ? 0 : 1);

    Animated.timing(animation, {
      toValue: menuToggled ? 1 : 0,
      duration: 200,
      useNativeDriver: true
    }).start();

    const rotateInterpolate = animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "180deg"]
    });
    const animatedStyles = { transform: [{ rotate: rotateInterpolate }] };
    logoStyles.push(animatedStyles);
  }

  return (
    <TouchableOpacity style={styles.tabStyle} onPress={onPress}>
      <Animated.View style={logoStyles}>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
      </Animated.View>
    </TouchableOpacity>
  );
};
export default class App extends React.Component {
  state = {
    menuToggled: null
  };

  toggleMenu = () => {
    this.setState(prevState => {
      return { menuToggled: !prevState.menuToggled };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TabIcon
          onPress={this.toggleMenu}
          menuToggled={this.state.menuToggled}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
