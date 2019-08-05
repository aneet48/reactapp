import React, { Component } from "react";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";

var { width } = Dimensions.get("window");
var box_count = 3;
var box_height = width / box_count - 40;
import { withNavigation } from "react-navigation";

 class Aut extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("Posts")}
        style={{
          marginRight: 5
        }}
      >
        <Image
          source={{
            uri:
              "https://images.unsplash.com/photo-1517638083100-3f5eb3055a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }}
          style={{
            height: box_height,
            width: box_height,
            borderRadius: box_height,
            margin: 5
          }}
        />
        <Text style={{ alignSelf: "center", fontWeight: "500" }}>Title</Text>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(Aut);
