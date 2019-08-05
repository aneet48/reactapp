import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import Post from "./Post";
export default class componentName extends Component {
  static navigationOptions = {
    title: "Liked",
    headerTitleStyle: {
      textAlign: "center",
      alignSelf: "center",
      flex: 1
    }
  };
  render() {
    return (
      <ScrollView>
        <Post liked={true} />
        <Post liked={true} />
        <Post liked={true} />
      </ScrollView>
    );
  }
}
