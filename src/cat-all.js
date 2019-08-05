import React, { Component } from "react";
import { Text, View, Image, ScrollView,TouchableOpacity } from "react-native";

export default class CategoryList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Categories",
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
          height: 100,
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
        <TouchableOpacity
          style={{ flex: 1, position: "absolute", top: 10, left: 0 }}
          onPress={() => this.props.navigation.navigate("Posts")}
        >
          <Image
            source={{
              uri:
                "https://images.unsplash.com/photo-1514517521153-1be72277b32f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            }}
            style={{
              height: 80,
              width: 80,
              borderRadius: 5,
              marginLeft: 20
            }}
          />
        </TouchableOpacity>
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
