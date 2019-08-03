import React, { Component } from 'react'
import { Text, View ,ScrollView,StyleSheet} from 'react-native'
import { DrawerItems, SafeAreaView } from "react-navigation";

const CustomDrawerContentComponent = props => (
  <ScrollView style={styles.container}>
    <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

export default CustomDrawerContentComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'red'
  },})