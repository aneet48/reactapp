import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  ScrollView
} from "react-native";
var { width } = Dimensions.get("window");
var box_count = 3;
var box_height = width / box_count - 40;
import Cat from "./cat"
import Aut from "./aut"
// import { ScrollView } from "react-native-gesture-handler";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: 0
    };
  }

  render() {
    return (
      <SafeAreaView style={{ paddingHorizontal: 20 }}>
        {/* boxes */}
        <View
          style={{
            paddingTop: 10,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <View
            style={{
              flex: 1,
              height: 160,
              // height: 40,
              // width: 40,
              backgroundColor: "#f7c4f0",
              marginRight: 2,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5
            }}
          >
            <Text>box 1</Text>
          </View>

          <View
            style={{
              flex: 1,
              height: 160,
              marginLeft: 2
              // height: 40,
              // width: 40,
              // backgroundColor: "pink"
            }}
          >
            <View
              style={{
                flex: 1,
                marginBottom: 2,
                // height: 40,
                // width: 40,
                backgroundColor: "#74dced",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5
              }}
            >
              <Text>box 2</Text>
            </View>
            <View
              style={{
                flex: 1,
                // height: 40,
                // width: 40,
                backgroundColor: "#59daac",
                marginTop: 2,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5
              }}
            >
              <Text>box 3</Text>
            </View>
          </View>
        </View>

        {/* categories */}
        <View
          style={{
            paddingVertical: 30
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Header 1
            </Text>
            <Text style={{ textDecorationLine: "underline", fontSize: 10 }}>
              Set Link
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
              flexWrap: "wrap"
            }}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Cat />
              <Cat />
              <Cat />
              <Cat />
              <Cat />
              <Cat />
            </ScrollView>
          </View>
        </View>
        {/* categories */}
        <View
          style={{
            paddingVertical: 30
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Header 2
            </Text>
            <Text style={{ textDecorationLine: "underline", fontSize: 10 }}>
              Set Link
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
              flexWrap: "wrap"
            }}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Aut />
              <Aut />
              <Aut />
              <Aut />
              <Aut />
              <Aut />
              
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});

export default Home;
