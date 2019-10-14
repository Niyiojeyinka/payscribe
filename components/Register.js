import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  Dimensions,
  ScrollView,
  Picker
} from "react-native";
import w3 from "../assets/styles/w3Native";
import Icon from "react-native-vector-icons/FontAwesome";
const deviceWidth = Dimensions.get("window").width;
import { Button, CheckBox } from "react-native-elements";
import { withNavigation } from "react-navigation";

class Register extends Component {
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
        style={[w3.Screen, w3.Blue]}
      >
        <View style={[w3.RowColumn]}>
          <View>
            <View style={[{ flex: 0.2 }, w3.Center, w3.Padding]}>
              <Text style={[w3.XxLarge, w3.TextWhite, w3.Bold]}>Sign Up</Text>
            </View>
            <ScrollView style={{ flex: 3 }}>
              <View>
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
                    name={"at"}
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
                    placeholder="Email Address"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    underlineColorAndroid="transparent"
                  />
                </View>
                <View>
                  <Icon
                    name={"phone"}
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
                    placeholder="Phone Number"
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
                <View>
                  <Icon
                    name={"users"}
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
                    placeholder="Referral( if any )"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    underlineColorAndroid="transparent"
                  />
                </View>
                <View style={[w3.Row, w3.Center]}>
                  <CheckBox
                    center
                    title="Male"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    textStyle={w3.TextGray}
                    containerStyle={{
                      backgroundColor: "Transparent",
                      borderWidth: 0
                    }}
                    checked={true}
                  />
                  <CheckBox
                    center
                    title="Female"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    textStyle={w3.TextGray}
                    containerStyle={{
                      backgroundColor: "Transparent",
                      borderWidth: 0
                    }}
                    checked={false}
                  />
                </View>
              </View>
            </ScrollView>
            <View style={{ flex: 0.3 }}>
              <Button
                onPress={() => {
                  this.props.navigation.navigate("PostRegister");
                }}
                title="Next"
                buttonStyle={[w3.MarginTop, w3.RoundJumbo, , w3.MarginBottom]}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default withNavigation(Register);
