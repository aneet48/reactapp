import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { DrawerItems, SafeAreaView } from "react-navigation";
let { width } = Dimensions.get("window");
import Icon from "react-native-vector-icons/dist/AntDesign";
import { withNavigation } from "react-navigation";

const CustomDrawerContentComponent = props => (
  // <ScrollView style={styles.container}>
  //   <View style={styles.layer1}>
  // <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
  //   <DrawerItems {...props} />
  // </SafeAreaView>
  //   </View>
  // </ScrollView>
  <View style={styles.container}>
    <View style={styles.logoArea}>
      <Text style={styles.logoText}>LOGO</Text>
    </View>
    <ScrollView>
      <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
    <View style={styles.shareArea}>
      <Icon
        color="#fff"
        size={20}
        name="facebook-square"
        style={styles.shareIcon}
      />

      <Icon color="#fff" size={20} name="instagram" style={styles.shareIcon} />

      <Icon
        color="#fff"
        size={20}
        name="behance-square"
        style={styles.shareIcon}
      />
    </View>
    <View style={styles.closeArea}>
      <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
        <Icon color="#fff" size={30} name="close" />
      </TouchableOpacity>
    </View>
  </View>
);

export default withNavigation(CustomDrawerContentComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(000, 000, 000, .5)",
    justifyContent: "space-between",
    alignItems: "center"
    // backgroundColor:'red'
  },
  logoText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff"
  },
  closeText: {
    fontSize: 50,
    // fontWeight: "bold",
    color: "#fff"
  },
  logoArea: {
    marginTop: 40,
    marginBottom: 100
  },
  closeArea: {
    // marginTop: 40,
    marginBottom: 60
  },
  shareArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 60
  },
  shareIcon: {
    paddingHorizontal: 10
  }
  // layer1: {
  //   height: "90%",
  //   // flex: 1,
  //   backgroundColor: "#59daac",
  //   borderBottomEndRadius: width / 2
  // }
});
