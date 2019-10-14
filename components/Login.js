import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  Dimensions,
  ScrollView
} from "react-native";
import w3 from "../assets/styles/w3Native";
import Icon from "react-native-vector-icons/FontAwesome";
const deviceWidth = Dimensions.get("window").width;
import { Button, CheckBox } from "native-base";
import { withNavigation } from "react-navigation";

class Login extends Component {
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
        source={require("../assets/images/front.png")}
        style={[w3.Screen, w3.Blue]}
      >
        <View style={[w3.RowColumn, { paddingTop: 100 }]}>
          <ScrollView>
            <View style={[w3.Third, w3.Center]}>
              <Text style={[w3.XxLarge, w3.TextWhite, w3.Bold]}>Sign In</Text>
            </View>
            <View style={[w3.TwoThird]}>
              <View>
                <Icon
                  name={"user"}
                  size={24}
                  color={"rgba(255,255,255,0.7)"}
                  style={{ position: "absolute", top: 25, left: 35 }}
                />
                <TextInput
                  style={[
                    {
                      height: 45,
                      width: deviceWidth - 60,
                      paddingLeft: 48,
                      backgroundColor: "rgba(0,0,0,0.35)",
                      color: "rgba(255,255,255,0.7)"
                    },
                    w3.RoundJumbo,
                    w3.Margin
                  ]}
                  placeholder="Username"
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  underlineColorAndroid="transparent"
                />
              </View>
              <View>
                <Icon
                  name={"key"}
                  size={24}
                  color={"rgba(255,255,255,0.7)"}
                  style={{ position: "absolute", top: 25, left: 35 }}
                />
                <TextInput
                  style={[
                    {
                      height: 45,
                      width: deviceWidth - 60,
                      paddingLeft: 48,
                      backgroundColor: "rgba(0,0,0,0.35)",
                      color: "rgba(255,255,255,0.7)"
                    },
                    w3.RoundJumbo,
                    w3.Margin
                  ]}
                  placeholder="Password"
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  underlineColorAndroid="transparent"
                />
              </View>

              <CheckBox
                center
                title="Remember Me"
                textStyle={{ color: "white" }}
                containerStyle={{
                  backgroundColor: "Transparent",
                  borderWidth: 0
                }}
              />
              <Button
                onPress={() => {
                  this.props.navigation.navigate("DrawerNavigation");
                }}
                title="Login"
                buttonStyle={[w3.MarginTop, w3.RoundJumbo]}
              />
              <View style={[w3.Center, w3.Margin]}>
                <Text style={w3.TextWhite}>Forgot Password?</Text>
                <Text style={[w3.xLarge, w3.TextWhite]}>Click here</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
export default withNavigation(Login);
