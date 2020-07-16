

import React from "react";
import { SafeAreaView, ScrollView, View, Text, StatusBar } from "react-native";
//import { GlobalFont } from "react-native-global-font";

import TabNavigator from "./Components/TabNavigator";
import * as Font from "expo-font";

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };
  async componentDidMount() {
  

    this.setState({ fontLoaded: true });
  }
  render() {
    return <TabNavigator />;
    
  }
}
