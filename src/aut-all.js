import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";

export default class CategoryList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Authors",
      headerTitleStyle: {
        textAlign: "center",
        alignSelf: "center",
        flex: 1
      },
      headerRight: <View />
    };
  };

  randomeData() {
    return (
      <View
        style={{
          marginTop: 10,
          width: "100%",
          justifyContent: "center",
          alignItems: "flex-end",
          position: "relative",
          height: 90,
          overflow: "hidden"
        }}
      >
        <View
          style={{
            width: "80%",
            // justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 2,
            borderRadius: 5,
            borderColor: "#59daac",
            borderWidth: 1,
            marginRight: 20
          }}
          // elevation={1}
        >
          <View style={{ width: "60%" }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                textTransform: "uppercase"
              }}
            >
              Title 1
            </Text>
            <Text>(27)</Text>
          </View>
        </View>
        <Image
          source={{
            uri:
              "https://images.unsplash.com/photo-1517638083100-3f5eb3055a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            marginLeft: 20,
            position: "absolute",
            top: 5,
            left: 0,
          }}
        />
      </View>
    );
  }
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        {this.randomeData()}
        {this.randomeData()}
        {this.randomeData()}
        {this.randomeData()}
        {this.randomeData()}
        {this.randomeData()}
        {this.randomeData()}
        {this.randomeData()}
        {this.randomeData()}
        {this.randomeData()}
        {this.randomeData()}
        {this.randomeData()}
      </ScrollView>
    );
  }
}
