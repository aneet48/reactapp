import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import MasonryList from "react-native-masonry-list";

const uris = [
  {
    uri:
      "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg"
  },
  {
    uri: "https://images.unsplash.com/photo-1564953078506-4999114094aa"
  },
  {
    uri: "https://images.unsplash.com/photo-1564930508729-1964235bd59c"
  },
  {
    uri: "https://images.unsplash.com/photo-1564939186834-32a73ba22532"
  },

  {
    uri:
      "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg"
  },
  {
    uri: "https://images.unsplash.com/photo-1564953078506-4999114094aa"
  },
  {
    uri: "https://images.unsplash.com/photo-1564930508729-1964235bd59c"
  },
  {
    uri: "https://images.unsplash.com/photo-1564939186834-32a73ba22532"
  }
];

export default class Search extends Component {
  static navigationOptions = {
    title: "Search",
    headerTitleStyle: {
      textAlign: "center",
      alignSelf: "center",
      flex: 1
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginVertical: 10,
            marginHorizontal: 20,
            justifyContent: "center"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 8,
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 2,
              borderRadius: 8,
              borderColor: "#59daac"
            }}
          >
            <TextInput
              placeholder="Search"
              style={{ fontSize: 15, paddingRight: 15 }}
            />
            <Icon name="search" style={{ fontSize: 15 }} color="#59daac" />
          </View>
        </View>

        <MasonryList images={uris} />
      </View>
    );
  }
}
