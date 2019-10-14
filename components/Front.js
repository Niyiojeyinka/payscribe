import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import w3 from "../assets/styles/w3Native";
import { Button, Image } from "react-native-elements";
import { withNavigation } from "react-navigation";

class Front extends Component {
  constructor(props) {
    super(props);
  }
  //hide header here
  static navigationOptions = {
    title: "",
    headerStyle: {
      display: "none"
    }
  };
  render() {
    return (
    <View style={[w3.Screen]}>
    <View style={[{flex:1}]}>
      <ImageBackground
        source={require("../assets/images/bg.jpeg")}
        style={[ w3.White]}
      >
</View>
      </ImageBackground>
      </View>
    );
  }
}
export default withNavigation(Front);
