import React, { Component } from "react";
import { Text, View } from "react-native";
import w3 from "../assets/styles/w3Native";
import { withNavigation } from "react-navigation";
//import Icon from "react-native-vector-icons/FontAwesome";

class Dashboard extends Component {
  render() {
    return (
      <View>
        <View style={w3.Screen}>
          <Text>Dashboard</Text>
        </View>
      </View>
    );
  }
}

export default withNavigation(Dashboard);
