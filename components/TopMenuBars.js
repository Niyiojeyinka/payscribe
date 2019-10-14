import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import w3 from "../assets/styles/w3Native";
import { DrawerActions, withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

class TopMenuBars extends Component {
  render() {
    return (
      <View style={[w3.Blue]}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.dispatch(DrawerActions.openDrawer());
          }}
        >
          <Icon
            name={"bars"}
            size={24}
            color={"rgba(255,255,255,1)"}
            style={[
              w3.MarginLeft,
              w3.PaddingRight,
              w3.PaddingTop,
              w3.PaddingBottom
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Profile");
          }}
          style={[
            w3.MarginTop,
            w3.MarginRight,
            w3.MarginBottom,
            {
              position: "absolute",
              right: 2,
              alignSelf: "center"
            }
          ]}
        >
          <Icon name={"user"} size={24} color={"rgba(255,255,255,1)"} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default withNavigation(TopMenuBars);
