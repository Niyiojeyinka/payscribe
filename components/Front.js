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
      <ImageBackground
        source={require("../assets/images/bg.jpeg")}
        style={[w3.Screen, w3.White]}
      >
        <View style={[w3.RowColum, w3.Padding]}>
          <View style={[w3.Half, w3.PaddingJumbo]}>
            <Image
              source={require("../assets/images/front-logo.png")}
              style={{ width: 300, height: 210 }}
            />
          </View>
          <View style={[w3.Half, w3.PaddingLarge]}>
            <Button
              onPress={() => this.props.navigation.navigate("Register")}
              buttonStyle={[w3.MarginTop, w3.MarginRight, w3.MarginLeft]}
              title="Register"
            />
            <Button
              onPress={() => this.props.navigation.navigate("Login")}
              title="Login"
              buttonStyle={[w3.MarginTop, w3.MarginRight, w3.MarginLeft]}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default withNavigation(Front);
