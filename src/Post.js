import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import { withNavigation } from "react-navigation";

let { width } = Dimensions.get("window");

class Post extends Component {
  render() {
    const { saved, liked } = this.props;
    return (
      <View
        style={{
          backgroundColor: "none",
          marginTop: 20,
          marginBottom: 20,
          marginHorizontal: 16,
          // flex: 1,
          elevation: 5,
          borderRadius: 5,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 3
          }
        }}
      >
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Single")}
        >
          <ImageBackground
            style={{
              height: width - 40,
              width: width - 40,
              alignSelf: "center",
              // width: box_height,
              // borderRadius: 5,
              // margin: 5
              backgroundColor: "red"
            }}
            source={{
              uri:
                "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=778&q=80"
            }}
          >
            <View
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(000, 000, 000, 0.3)"
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  textAlign: "center",
                  fontWeight: "bold"
                }}
              >
                Lots of things that couldn't be done have been done.
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingHorizontal: 10
            // alignItems: "center"
          }}
        >
          <Icon name="download" style={{ fontSize: 18 }} color="gray" />
          <Icon name="pencil" style={{ fontSize: 18 }} color="gray" />
          <Icon
            name="bookmark"
            style={{ fontSize: 18 }}
            color={saved ? "#59daac" : "gray"}
          />
          <Icon
            name="heart"
            style={{ fontSize: 18 }}
            color={liked ? "#f994eb" : "gray"}
          />
          <Icon name="share-alt" style={{ fontSize: 18 }} color="gray" />
        </View>
      </View>
    );
  }
}

export default withNavigation(Post);
