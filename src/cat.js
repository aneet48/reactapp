import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from "react-native";

var { width } = Dimensions.get("window");
var box_count = 3;
var box_height = width / box_count - 40;
export default class componentName extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#ffffff",
          borderColor: "#ddd",
          borderRadius: 5,
          borderWidth: 1,
          marginRight: 5
        }}
      >
        <Image
          source={{
            uri:
              "https://images.unsplash.com/photo-1514517521153-1be72277b32f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          }}
          style={{
            height: box_height,
            width: box_height ,
            borderRadius: 5,
            margin: 5
          }}
        />
        <Text style={{ alignSelf: "center", fontWeight: "500" }}>Life</Text>
      </View>
    );
  }
}