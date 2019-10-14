import React, { Component } from "react";
import { Text, View } from "react-native";
import w3 from "../assets/styles/w3Native";
import Icon from "react-native-vector-icons/FontAwesome";
import { withNavigation } from "react-navigation";
import TopMenuBars from "./TopMenuBars";
class Account extends Component {
  render() {
    return (
      <View style={w3.Screen}>
        <Text>Account</Text>
      </View>
    );
  }
}
export default withNavigation(Account);
