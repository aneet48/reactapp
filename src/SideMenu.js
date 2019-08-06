import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet, Dimensions } from "react-native";
import { DrawerItems, SafeAreaView } from "react-navigation";
let { width } = Dimensions.get("window");

const CustomDrawerContentComponent = props => (
  // <ScrollView style={styles.container}>
  //   <View style={styles.layer1}>
  // <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
  //   <DrawerItems {...props} />
  // </SafeAreaView>
  //   </View>
  // </ScrollView>
  <View style={styles.container}>
    <View style={styles.layer1}>
      <ScrollView>
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
          <DrawerItems {...props} />
        </SafeAreaView>
      </ScrollView>
    </View>
  </View>
);

export default CustomDrawerContentComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black"
    // backgroundColor:'red'
  },
  layer1: {
    height: "90%",
    // flex: 1,
    backgroundColor: "#59daac",
    borderBottomEndRadius: width / 2
  }
});
