import React, { Component } from "react";
import { Text, View,ScrollView } from "react-native";
import Post from "./Post"
export default class componentName extends Component {
  static navigationOptions = {
    title: "Saved",
    headerTitleStyle: {
      textAlign: "center",
      alignSelf: "center",
      flex: 1
    }
  };
  render() {
    return (
      <ScrollView>
        <Post saved={true} />
        <Post saved={true} />
        <Post saved={true} />
      </ScrollView>
    );
  }
}
