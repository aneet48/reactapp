import React, { Component } from "react";
import { Text, View, ScrollView,TouchableOpacity,Image } from "react-native";
import Post from "./Post";
import Aut from "./aut";
export default class componentName extends Component {
  static navigationOptions = {
    title: "Single",
    headerTitleStyle: {
      textAlign: "center",
      alignSelf: "center",
      flex: 1
    },
    headerRight: <View />
  };

  randomData(){
    return (
      <Text
        style={{
          borderWidth: 1,
          borderRadius: 2,
          padding: 2,
          margin: 4,
          borderColor: "#59daac",
          backgroundColor: "#59daac",
          // color: "#59daac",
          color: "#fff",
          fontWeight:'bold'
        }}
      >
        {" "}
        Tag 1
      </Text>
    );
  }
  render() {
    return (
      <ScrollView>
        <Post />
        <Text
          style={{
            color: "gray",
            fontSize: 16,
            fontWeight: "bold",
            marginHorizontal: 20
          }}
        >
          Tags:{" "}
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginHorizontal: 20,
            marginVertical: 20
          }}
        >
          {this.randomData()}
          {this.randomData()}
          {this.randomData()}
          {this.randomData()}
          {this.randomData()}
          {this.randomData()}
          {this.randomData()}
          {this.randomData()}
          {this.randomData()}
          {this.randomData()}
        </View>
        <Text
          style={{
            color: "gray",
            fontSize: 16,
            fontWeight: "bold",
            marginHorizontal: 20
          }}
        >
          Author:{" "}
        </Text>

        <View style={{ marginHorizontal: 20 }}>
          <TouchableOpacity
            // onPress={() => this.props.navigation.navigate("Posts")}
            style={{
              marginRight: 5,
              flexDirection: "row",
              alignItems:'center',
            }}
          >
            <Image
              source={{
                uri:
                  "https://images.unsplash.com/photo-1517638083100-3f5eb3055a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }}
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                margin: 20
              }}
            />
            <View>
              <Text style={{ fontWeight: "500" }}>Title</Text>
              <Text style={{}}>Total: 27</Text>
              <Text style={{ color: "#f994eb" ,textDecorationLine:'underline'}}>Show More from this author</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
